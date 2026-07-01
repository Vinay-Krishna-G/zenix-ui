const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/Users/vinnu/.gemini/antigravity-ide/brain/af60f214-14de-4080-bbc3-3893778bda6d';
const BASE_URL = 'http://localhost:3000';

const PAGES_TO_TEST = [
  { name: 'home', path: '/' },
  { name: 'launchpad', path: '/launchpad' },
  { name: 'studio', path: '/studio' },
  { name: 'blueprints', path: '/blueprints' },
  { name: 'blueprints-id', path: '/blueprints/zenix-portfolio' },
  { name: 'templates-slug', path: '/templates/react-landing-template' },
  { name: 'docs-nextjs', path: '/docs/nextjs' },
  { name: 'docs-vite', path: '/docs/vite' },
  { name: 'docs-remix', path: '/docs/remix' },
  { name: 'docs-astro', path: '/docs/astro' }
];

async function runVerification() {
  console.log('Starting Phase 1 Verification...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const results = {
    networkErrors: [],
    consoleMessages: [],
    screenshots: []
  };

  const page = await context.newPage();

  page.on('response', response => {
    if (response.status() >= 400 && response.status() !== 401 && response.request().resourceType() !== 'fetch') {
      // ignore 401s or API fetches, we care about assets (images, js, css, 404s)
      results.networkErrors.push(`[${response.status()}] ${response.url()}`);
    }
  });

  page.on('console', msg => {
    const type = msg.type();
    if (type === 'error' || type === 'warning') {
      results.consoleMessages.push(`[${type.toUpperCase()}] ${msg.text()}`);
    }
  });

  page.on('pageerror', err => {
    results.consoleMessages.push(`[EXCEPTION] ${err.message}`);
  });

  for (const p of PAGES_TO_TEST) {
    console.log(`Testing ${p.path}...`);
    try {
      await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Scroll down slowly to trigger intersection observers
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          let distance = 500;
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 150);
        });
      });

      // Wait a moment for any lazy images/components to mount
      await page.waitForTimeout(1000);
      
      const screenshotPath = path.join(ARTIFACT_DIR, `verify_${p.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      results.screenshots.push(`verify_${p.name}.png`);
      
    } catch (e) {
      console.error(`Failed to test ${p.path}:`, e.message);
      results.consoleMessages.push(`[TEST_ERROR] ${p.path}: ${e.message}`);
    }
  }

  // Live Preview validation on Launchpad details view
  console.log('Testing Live Preview interactivity on Launchpad...');
  try {
    await page.goto(`${BASE_URL}/launchpad`, { waitUntil: 'networkidle' });
    // Click on the first experience
    await page.click('text=Launch a Startup'); // Click the section or find the card
    // Wait for the Live Preview to mount
    await page.waitForTimeout(2000);
    // Let's just capture a screenshot of launchpad interaction
    const screenshotPath = path.join(ARTIFACT_DIR, `verify_launchpad_interactivity.png`);
    await page.screenshot({ path: screenshotPath });
    results.screenshots.push(`verify_launchpad_interactivity.png`);
  } catch (e) {
    console.error('Launchpad interactivity test failed:', e.message);
  }

  await browser.close();

  fs.writeFileSync(path.join(ARTIFACT_DIR, 'scratch', 'verify-results.json'), JSON.stringify(results, null, 2));
  console.log('Verification complete. Results saved.');
}

runVerification().catch(console.error);

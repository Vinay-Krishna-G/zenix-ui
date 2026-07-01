const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3000';
const PAGES_TO_TEST = [
  '/',
  '/launchpad',
  '/studio',
  '/blueprints',
  '/blueprints/zenix-portfolio',
  '/templates/react-landing-template',
  '/docs/nextjs',
  '/docs/vite',
  '/docs/remix',
  '/docs/astro'
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = { errors: [], warnings: [] };

  page.on('response', response => {
    if (response.status() >= 400 && response.status() !== 401 && response.request().resourceType() !== 'fetch') {
      results.errors.push(`[NETWORK ${response.status()}] ${response.url()}`);
    }
  });

  page.on('console', msg => {
    if (msg.type() === 'error') results.errors.push(`[CONSOLE] ${msg.text()}`);
    if (msg.type() === 'warning') results.warnings.push(`[CONSOLE WARNING] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    results.errors.push(`[PAGE ERROR] ${err.message}`);
  });

  for (const p of PAGES_TO_TEST) {
    try {
      await page.goto(`${BASE_URL}${p}`, { waitUntil: 'load', timeout: 10000 });
      await page.waitForTimeout(100);
    } catch (e) {
      results.errors.push(`[NAVIGATION] ${p}: ${e.message}`);
    }
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
}
run();

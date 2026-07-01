import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const PREVIEWS_DIR = path.join(process.cwd(), 'apps/website/public/verification');

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 1024, height: 1366 },
  mobile: { width: 390, height: 844 }
};

const PAGES = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'launchpad', url: 'http://localhost:3000/launchpad' }
];

async function run() {
  if (!fs.existsSync(PREVIEWS_DIR)) {
    fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let errors = 0;
  let failedRequests = 0;
  let missingAssets = 0;

  for (const pageConfig of PAGES) {
    for (const [device, viewport] of Object.entries(VIEWPORTS)) {
      console.log(`[VERIFYING] ${pageConfig.name} on ${device}...`);
      
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors++;
          console.error(`Console Error: ${msg.text()}`);
        }
      });
      
      page.on('response', response => {
        if (!response.ok() && response.status() !== 304) {
          if (response.request().resourceType() === 'image') missingAssets++;
          failedRequests++;
        }
      });

      await page.goto(pageConfig.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      const screenshotPath = path.join(PREVIEWS_DIR, `${device}-${pageConfig.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot to ${screenshotPath}`);
      
      await context.close();
    }
  }

  await browser.close();

  console.log('\n--- VERIFICATION REPORT ---');
  console.log(`Console Errors: ${errors}`);
  console.log(`Failed Requests: ${failedRequests}`);
  console.log(`Missing Assets: ${missingAssets}`);
  
  if (errors === 0 && failedRequests === 0) {
    console.log('✅ PASS');
  } else {
    console.log('❌ FAIL');
    process.exit(1);
  }
}

run().catch(console.error);

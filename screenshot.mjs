import puppeteer from 'puppeteer';
import path from 'path';

const routes = [
  { name: 'home', url: '/' },
  { name: 'marketplace', url: '/templates' },
  { name: 'launchpad', url: '/launchpad' },
  { name: 'studio', url: '/studio' },
  { name: 'blueprint_detail', url: '/blueprints/zenix-landing' },
  { name: 'docs', url: '/docs/nextjs' },
  { name: 'autumn_portfolio', url: '/blueprints/autumn-portfolio' }
];

const artifactDir = '/Users/vinnu/.gemini/antigravity-ide/brain/af60f214-14de-4080-bbc3-3893778bda6d/';

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  for (const route of routes) {
    try {
      await page.goto('http://localhost:3000' + route.url, { waitUntil: 'networkidle0', timeout: 30000 });
      const savePath = path.join(artifactDir, route.name + '.png');
      await page.screenshot({ path: savePath, fullPage: false });
      console.log('Saved', route.name);
    } catch (e) {
      console.error('Failed', route.name, e);
    }
  }
  await browser.close();
}
run();

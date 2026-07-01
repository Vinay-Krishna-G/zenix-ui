import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { EXPERIENCES, IDENTITIES, AESTHETICS } from '../apps/website/src/lib/launchpad';

const PREVIEWS_DIR = path.join(process.cwd(), 'apps/website/public/previews');
const MANIFEST_PATH = path.join(PREVIEWS_DIR, 'preview-manifest.json');

async function run() {
  if (!fs.existsSync(PREVIEWS_DIR)) {
    fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
  }

  // Load existing manifest for caching
  let manifest: any = {};
  if (fs.existsSync(MANIFEST_PATH)) {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Generating unified preview screenshots...');

  for (const exp of EXPERIENCES) {
    for (const brand of IDENTITIES) {
      for (const aesthetic of AESTHETICS) {
        for (const variant of exp.variants) {
          const fileName = `${exp.id}-${brand.id}-${variant.id}-${aesthetic.id}.png`;
          const filePath = path.join(PREVIEWS_DIR, fileName);
          const cacheKey = `${exp.id}-${brand.id}-${variant.id}-${aesthetic.id}`;
          
          if (manifest[cacheKey] && fs.existsSync(filePath)) {
            console.log(`[CACHED] Skipping ${cacheKey}...`);
            continue;
          }

          console.log(`[RENDERING] ${cacheKey}...`);
          
          await page.goto(`http://localhost:3000/preview-render?exp=${exp.id}&brand=${brand.id}&variant=${variant.id}&aesthetic=${aesthetic.id}`, { waitUntil: 'networkidle' });
          await page.waitForTimeout(500);
          await page.screenshot({ path: filePath });
          
          manifest[cacheKey] = {
            image: `/previews/${fileName}`,
            updated: new Date().toISOString(),
            theme: brand.id
          };
        }
      }
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log('✅ Previews generated and manifest updated.');

  await browser.close();
}

run().catch(console.error);

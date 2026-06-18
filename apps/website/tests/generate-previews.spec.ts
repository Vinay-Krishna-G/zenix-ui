import { test } from '@playwright/test';
import { blueprints } from '@zenixui/blueprints';

test.describe('Generate Blueprint Previews', () => {
  // Increase timeout since building 28 pages in Next.js dev mode might take time
  test.setTimeout(300000); 

  test('generate screenshots for all blueprints', async ({ page }) => {
    for (const bp of blueprints) {
      console.log(`Generating preview for ${bp.id}...`);
      await page.goto(`/blueprints/${bp.id}`);
      
      // Wait for the component to mount and any animations to settle
      await page.waitForTimeout(2000);

      // Locate the Experience container
      const experienceContainer = page.locator('.zx-experience').first();
      
      // Capture screenshot
      await experienceContainer.screenshot({ path: `public/previews/${bp.id}.png` });
    }
  });
});

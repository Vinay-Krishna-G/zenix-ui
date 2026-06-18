import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Product Readiness Audit', () => {
  const routes = [
    { path: '/', name: 'home' },
    { path: '/experiences', name: 'experiences' },
    { path: '/themes', name: 'themes' },
    { path: '/studio', name: 'studio' },
    { path: '/docs', name: 'docs' },
    { path: '/docs/components', name: 'components' },
    { path: '/roadmap', name: 'roadmap' }
  ];

  for (const route of routes) {
    test(`capture ${route.name}`, async ({ page }) => {
      // Navigate to the route
      await page.goto(`http://localhost:3000${route.path}`);
      
      // Wait for any animations to settle
      await page.waitForTimeout(1000);

      // Save screenshot directly to the conversation's scratch directory
      const screenshotPath = `/Users/vinnu/.gemini/antigravity-ide/brain/2199795e-56dd-4c00-a63f-6f665348e160/scratch/${route.name}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
    });
  }
});

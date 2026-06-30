import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ZenixUI/);
  
  // Verify hero section is visible
  await expect(page.locator('text=Install exactly what you need')).toBeVisible();
  
  // Verify blueprint gallery is visible
  await expect(page.getByRole('heading', { name: 'Blueprint Gallery' })).toBeVisible();
});

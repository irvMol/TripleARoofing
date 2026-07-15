const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  // Verify page title exists
  await expect(page).toHaveTitle(/Vigorous/i);

  // Verify hero text appears
  await expect(page.getByText('Quality Above All Else')).toBeVisible();

  // Verify services section exists
  await expect(page.locator('#services')).toBeVisible();
});

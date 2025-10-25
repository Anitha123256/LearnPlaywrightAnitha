import { test, expect } from '@playwright/test';

test('should login using parsed credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for sample credentials to appear
  //await page.waitForSelector('div.orangehrm-login-branding');

  // Extract raw text
  const rawUsernameText = await page.locator("//p[text()='Username : Admin']").textContent();
  const rawPasswordText = await page.locator("//p[text()='Password : admin123']").textContent();

  // Parse actual values
  const SUsername = rawUsernameText?.split(':')[1].trim(); // "Admin"
  const SPassword = rawPasswordText?.split(':')[1].trim(); // "admin123"

  console.log(`Parsed credentials -> Username: ${SUsername}, Password: ${SPassword}`);

  // Wait for input fields to be ready
//   await page.waitForSelector("input[placeholder='Username']");
//   await page.waitForSelector("input[placeholder='Password']");

  // Fill login form
  await page.locator("input[placeholder='Username']").fill(SUsername);
  await page.locator("input[placeholder='Password']").fill(SPassword);

  // Click login
  await page.locator("button[type='submit']").click();

  // Optional: Assert login success
  await expect(page).toHaveURL(/dashboard/);
});

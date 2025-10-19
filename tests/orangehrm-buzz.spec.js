import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Buzz post', () => {
  test('login, post to Buzz and verify the post appears', async ({ page }) => {
    // 1. Navigate
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // 2-4. Login
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Wait for main UI to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/dashboard|dashboard\.html/);

    // 5. Click on Buzz menu item
    await page.click('a:has-text("Buzz")');
    await page.waitForLoadState('networkidle');

    // 6. Enter text in "What's on your mind"
    const message = `Automated test post ${new Date().toISOString()}`;
    const placeholderLocator = page.getByPlaceholder("What's on your mind?");
    if (await placeholderLocator.count() > 0) {
      await placeholderLocator.fill(message);
    } else {
      // fallback for contenteditable editors
      const editable = page.locator('div[contenteditable="true"]').first();
      await editable.click();
      await editable.type(message);
    }

    // Click Share (or Post) button
    const shareButton = page.getByRole('button', { name: /Share|Post/i }).first();
    await shareButton.click();

    // 7. Verify posted or not
    const posted = page.locator(`text=${message}`).first();
    await expect(posted).toBeVisible({ timeout: 10_000 });
  });
});
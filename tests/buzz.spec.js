import { test, expect } from '@playwright/test';

test.describe('OrangeHRM - Buzz post', () => {
  test('login, post to Buzz and verify the post appears', async ({ page }) => {
    // 1. Navigate
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // 2-4. Login using placeholders / role-based selectors
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load
    await page.waitForLoadState('networkidle');
    // optional: ensure we're on the dashboard
    await expect(page).toHaveURL(/dashboard/);

    // 5. Click on Buzz menu item
    // use link role if available, otherwise click by visible text
    const buzzLink = page.getByRole('link', { name: 'Buzz' });
    if (await buzzLink.count() > 0) {
      await buzzLink.click();
    } else {
      await page.click('a:has-text("Buzz")');
    }

    await page.waitForLoadState('networkidle');

    // 6. Enter text in "What's on your mind"
    const message = `Automated post from Playwright ${new Date().toISOString()}`;

    // Try placeholder input first, then contenteditable fallback
    const placeholderLocator = page.getByPlaceholder("What's on your mind?");
    if (await placeholderLocator.count() > 0) {
      await placeholderLocator.fill(message);
    } else {
      const editable = page.locator('div[contenteditable="true"]').first();
      await editable.click();
      await editable.type(message);
    }

    // Click Share / Post button (handle both labels)
    const shareBtn = page.getByRole('button', { name: /Share|Post/i }).first();
    await shareBtn.click();

    // 7. Verify posted or not
    // Wait for the message to appear in the feed
    const posted = page.locator(`text=${message}`).first();
    await expect(posted).toBeVisible({ timeout: 15000 });
  });
});

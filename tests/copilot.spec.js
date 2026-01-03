import { test, expect } from '@playwright/test';

test.describe('OrangeHRM - Buzz post', () => {

	test('login, post to Buzz and verify the post appears', async ({ page }) => {

		// 1. Navigate to the site
		await page.goto('https://opensource-demo.orangehrmlive.com/');

		// 2-4. Login
		await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
		await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
		await page.getByRole('button', { name: 'Login' }).click();

		// Wait for dashboard to load
		await page.waitForLoadState('networkidle');
		await expect(page).toHaveURL(/dashboard/);

		// 5. Click on Buzz menu item
		const buzzLink = page.getByRole('link', { name: 'Buzz' });
		if (await buzzLink.count() > 0) {
			await buzzLink.click();
		} else {
			await page.click('a:has-text("Buzz")');
		}

		await page.waitForLoadState('networkidle');

		// 6. Enter text in "What's on your mind"
		const message = `Automated Playwright post ${new Date().toISOString()}`;

		const placeholderLocator = page.getByPlaceholder("What's on your mind?");
		if (await placeholderLocator.count() > 0) {
			await placeholderLocator.fill(message);
		} else {
			// fallback for contenteditable editors
			const editable = page.locator('div[contenteditable="true"]').first();
			await editable.click();
			await editable.type(message);
		}

		// Click Share/Post button
		const shareBtn = page.getByRole('button', { name: /Share|Post/i }).first();
		await shareBtn.click();

		// 7. Verify posted or not
		const posted = page.locator(`text=${message}`).first();
		await expect(posted).toBeVisible({ timeout: 15000 });
	});
});


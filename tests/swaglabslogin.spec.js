import { test, expect } from '@playwright/test';

test('Add product', async ({ page }) => {

await page.goto("https://www.saucedemo.com/")
await page.locator("//input[@data-test='username']").fill("standard_user")
await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
await page.locator("//input[@type='submit']").click()
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
});
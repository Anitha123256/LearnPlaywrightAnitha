import { test, expect } from '@playwright/test';

test('Add employee for orange HRM', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("//span[text()='PIM']").click()
    await page.locator("//a[normalize-space(text())='Add Employee']").click()
    await page.locator("//input[@placeholder='First Name']").fill("Anu")
    await page.locator("//input[@placeholder='Last Name']").fill("E")
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("8211")
    await page.locator("//button[contains(.,'Save')]").click()
    








});
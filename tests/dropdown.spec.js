import { test, expect } from '@playwright/test';
 
test('should select an option from dropdown', async ({ page }) => {
        // TODO: Navigate to page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("admin")
    await page.locator("//input[@type='password']").fill("admin123")
        await page.locator("button[type='submit']").click()
        await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        await page.locator("(//input[@placeholder='Type for hints...'])[1]").click()
        await page.locator("(//div[@class='oxd-select-text--after']//i)[1]").click()
        await page.locator("(//div[@class='oxd-select-text--after']//i)[1]").click()
        await page.locator("//div[@role='listbox']//div[2]").click()
        await page.pause()

        // TODO: Locate dropdown
        // TODO: Select option
        // TODO: Assert selection
    });
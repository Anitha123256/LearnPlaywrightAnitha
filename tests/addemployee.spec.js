import { test, expect } from '@playwright/test';


test('Verify employee Details ', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("//input[@placeholder='Username']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
await page.locator("//button[@type='submit']").click()
await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click()
await page.locator("//li[@class='oxd-topbar-body-nav-tab --visited']//a[1]").click()
await page.locator("(//span[normalize-space(text())='Configuration']/following::input)[1]").fill("Ammu")
await page.locator("(//span[normalize-space(text())='Configuration']/following::input)[3]").fill("Ani")
await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("0521")
await page.locator("//button[contains(.,'Save')]").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186")
await expect (page.locator("//h6[text()='Personal Details']")).toBeVisible()



})
 
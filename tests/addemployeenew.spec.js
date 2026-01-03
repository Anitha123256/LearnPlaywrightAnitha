import { test, expect } from '@playwright/test';

test('Verify demoqa elements', async ({ page }) => {

await page.goto("https://demoqa.com/")
await page.locator("(//div[contains(@class,'card mt-4')]//div)[3]").click()
await page.locator("//li[contains(.,'Text Box')]").click()
await page.goto("https://demoqa.com/text-box")

await page.locator("//input[@placeholder='Full Name']").fill("Ammu")
await page.locator("//input[@placeholder='name@example.com']").fill("eanu145@gmail.com")
await page.locator("//textarea[@placeholder='Current Address']").fill("Amarapuram")
await page.locator("//label[normalize-space(text())='Permanent Address']/following::textarea").fill("Pelubanda")
await page.locator("//button[normalize-space(text())='Submit']").click()
await expect(page.locator("//p[contains(.,'Name:Ammu')]")).toContainText("Ammu")




});
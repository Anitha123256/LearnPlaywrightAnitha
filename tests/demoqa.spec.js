import { test, expect } from '@playwright/test';
import data from "../testData/demoqa.json"

test('Verify Demo QA Text box Fields', async ({ page }) => {
    await page.goto("https://demoqa.com/")

await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()
await page.locator("//li[contains(.,'Text Box')]").click()
await expect(page).toHaveURL("https://demoqa.com/text-box")
await page.locator("//input[@placeholder='Full Name']").fill(data.fullname)
await page.locator("#userEmail").fill(data.email)
await page.locator("#currentAddress").fill(data.CurrentAddress)
await page.locator("#permanentAddress").fill(data.PermananetAddress)
await page.locator("#submit").click()
await expect(page.locator("#name")).toContainText(data.fullname);









})
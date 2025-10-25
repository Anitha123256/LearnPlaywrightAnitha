import { test, expect } from '@playwright/test';

test('Verify Login with valid credentials', async ({ page }) => {

await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@data-test='username']").fill(process.env.APP_USERNAME)
await page.locator("(//input[@class='form_input'])[2]").fill(process.env.APP_PASSWORD)
await page.locator("//input[@value='LOGIN']").click()
await expect(page.locator("//div[@id='inventory_filter_container']//div[1]")).toBeVisible()



})

test('Verify Login with valid Username and Invalid Password', async ({ page }) => {

await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@data-test='username']").fill("standard_user")
await page.locator("(//input[@class='form_input'])[2]").fill("secret_sauce1")
await page.locator("//input[@value='LOGIN']").click()
await expect(page.locator("//input[@class='btn_action']/following-sibling::h3[1]")).toBeVisible()



})
test('Verify Login with Invalid Username and valid Password', async ({ page }) => {

await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@data-test='username']").fill("standard_user1")
await page.locator("(//input[@class='form_input'])[2]").fill("secret_sauce")
await page.locator("//input[@value='LOGIN']").click()
await expect(page.locator("//input[@type='submit']/following-sibling::h3[1]")).toBeVisible()



})
test('Verify Login with Invalid Username and Invalid Password', async ({ page }) => {

await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@data-test='username']").fill("standard_user1")
await page.locator("(//input[@class='form_input'])[2]").fill("secret_sauce1")
await page.locator("//input[@value='LOGIN']").click()
await expect(page.locator("//input[@value='LOGIN']/following-sibling::h3[1]")).toBeVisible()



})

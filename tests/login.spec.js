import { test, expect } from '@playwright/test';

test('Verify Login with valid credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/v1/index.html')// Replace with your actual URL

  await page.locator("//input[@data-test='username']").fill("standard_user")

  await page.locator("///input[@data-test='password']").fill("secret_sauce")

  await page.locator("//input[@value='LOGIN']").click()

  await expect(page.locator("//div[@id='inventory_filter_container']//div[1]")).toBeVisible() // Adjust the expected title
})

test('Verify Login with valid Username and Invalid Password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/v1/index.html') // Replace with your actual URL

  await page.locator("//input[@data-test='username']").fill("standard_user")

  await page.locator("///input[@data-test='password']").fill("secret_sauce123")

  await page.locator("//input[@value='LOGIN']").click()
  
  await expect(page).toHaveURL("//input[@class='btn_action']/following-sibling::h3[1]").toBeVisible()// Adjust the expected title
})

test('Verify Login with Invalid Username and valid Password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/v1/index.html') // Replace with your actual URL

  await page.locator("//input[@data-test='username']").fill("standard_user123")

  await page.locator("///input[@data-test='password']").fill("secret_sauce")

  await page.locator("//input[@value='LOGIN']").click()
  
  await expect(page).toHaveURL("///button[@fdprocessedid='434r1']").toBeVisible()// Adjust the expected title
})


test('Verify Login with Invalid Username and Invalid Password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/v1/index.html') // Replace with your actual URL

  await page.locator("//input[@data-test='username']").fill("standard_user123")

  await page.locator("///input[@data-test='password']").fill("secret_sauce12")

  await page.locator("//input[@value='LOGIN']").click()
  
  await expect(page).toHaveURL("///button[@fdprocessedid='i8if2']").toBeVisible()// Adjust the expected title
})
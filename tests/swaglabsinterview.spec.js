import { test, expect } from '@playwright/test';

test('Add product', async ({ page }) => {


await page.goto("https://www.saucedemo.com/v1/inventory.html")

await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
// use enter keyword instead of login button
await page.locator('#password').press("Enter")// await page.keyboard.press('Enter')// 


// to get 2nd highest price product
const prices = await page.locator('.inventory_item_price').allTextContents()
// This will convert the price strings (e.g. "$29.99") into numbers
const priceNumbers = prices.map(price => parseFloat(price.replace('$', '')))
console.log(prices)

let sortedAsc = prices.slice().sort((a,b) =>  parseFloat(a.slice(1)) - parseFloat(b.slice(1)));
console.log(sortedAsc[sortedAsc.length-1])
await page.locator(`//div[@class="pricebar"]/div[contains(.,"${sortedAsc[sortedAsc.length-1]}")]/../button`).click()
})
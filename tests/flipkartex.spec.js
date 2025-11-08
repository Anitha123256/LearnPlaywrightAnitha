import { test, expect } from '@playwright/test';

test('Get total price of 2 products', async ({ page }) => {
await page.goto('https://www.flipkart.com/')
await page.locator('//input[@name="q"]').fill('iphone 17')
await page.keyboard.press('Enter')
const price1 = await page.locator('.Nx9bqj._4b5DiR').nth(0).textContent()
console.log(price1)

const price2 = await page.locator('.Nx9bqj._4b5DiR').nth(1).textContent()
console.log(price2)

const toNumber = s => Number(String(s).replace(/[^\d.]/g, ''));
const num1 = toNumber(price1);
const num2 = toNumber(price2);
const total = num1 + num2;
console.log("Computed total =", total);
console.log("Total =" + (Number(price1.replace("₹", "").replace(",", "")) +Number(price2.replace("₹", "").replace(",", ""))))

})
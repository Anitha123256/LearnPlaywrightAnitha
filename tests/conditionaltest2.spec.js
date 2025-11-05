import { test, expect } from '@playwright/test';


test('open website based on Browser', async ({ page, browserName }) => {

if(browserName == "chromium"){
    await page.goto("https://www.flipkart.com/")
}
else  if(browserName == "firefox"){
    await page.goto("https://www.amazon.in/")
}
else if(browserName == "webkit"){
    await page.goto("https://www.meesho.com/")
}



})
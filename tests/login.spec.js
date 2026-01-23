import { test, expect } from '@playwright/test';
import { loginPage } from "../pages/login.po";
import data from "../testData/logindata.json";
let page
let login
test.describe("Verify Login functionality", () => {

    test.beforeEach(async ({ browser }) => {

       const page = await browser.newPage()
       login = new loginPage(page)
        await login.launchUrl()
        await login.verifyLogo()

    })


    test('verify login with valid credentials', async () => {
        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await login.loginSuccess()
    })
    test('verify login with valid username & invalid password', async () => {
        await login.loginwithCreds(process.env.APP_USERNAME, data.wrongpassword)
        await login.loginSuccess()
    })
    test('verify login with inalid username & valid password', async () => {
        await login.loginwithCreds(data.wrongusername, process.env.APP_PASSWORD)
        await login.loginSuccess()
    })
    test('verify login with inalid username & invalid password', async () => {
        await login.loginwithCreds(data.wrongusername, data.wrongpassword)
        await login.loginSuccess()
    })


})
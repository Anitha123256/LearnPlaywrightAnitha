import { expect } from "@playwright/test"

exports.loginPage = class loginPage{
    constructor(page) {
        this.page = page
        this.logo = this.page.locator("//img[@alt='company-branding']")
        this.usernameInput = this.page.locator('input[name="username"]')
        this.passwordInput = this.page.locator('input[name="password"]')
        this.loginBtn = this.page.locator('button[type="submit"]')
        this.loginErrorMsg = this.page.locator('//p[text()="Invalid credentials"]')
    }
    async launchUrl() {
        await this.page.goto("/web/index.php/auth/login")
    }
    async verifyLogo() {
        await expect(this.logo).toBeVisible()
    }
    async loginwithCreds(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()

    }
    async loginError() {
        await expect(this.loginErrorMsg).toBeVisible()
    }
    async loginSuccess() {
        await expect(this.page).toHaveURL("/web/index.php/dashboard/index")
    }
}

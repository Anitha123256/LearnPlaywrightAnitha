import { test, expect } from '@playwright/test';
for(let i=1; i<=10; i++){
test(`check box - ${i}`, async ({ page }) => {
await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
const checkbox_status = await page.locator('input[name^="chk_altemail"]').isChecked()
console.log(checkbox_status)
if(!checkbox_status){
    await page.locator('input[name^="chk_altemail"]').check()

}


})
}
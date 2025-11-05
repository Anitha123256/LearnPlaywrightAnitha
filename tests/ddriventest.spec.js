import { test, expect } from '@playwright/test';

const jobtitles = {
    title1: "SDE 1",
    title2: "Automation QA Engineer",
    title3: "Account assistant"
}

for ( let title in jobtitles) {
    test(`Verify job Title - ${title}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill(jobtitles[title]);
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation Testing');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});
}
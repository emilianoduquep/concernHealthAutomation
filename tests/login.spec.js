const {test, expect} = require('@playwright/test');

test('Title', async ({page})=>{
    await page.goto("https://test.concernhealth.com/");
    await page.locator("#input-email").fill("testconcernhealth+100@gmail.com");
    await page.locator("input[id='input-password']").fill("Test2024%");
    await page.locator("//button[normalize-space()='LOGIN']").click();
    await expect(page).toHaveURL("https://test.concernhealth.com/#/pages/dashboard?activeTab=my-care");
    await page.locator()
});
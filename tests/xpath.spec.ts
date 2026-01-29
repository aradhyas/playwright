import {test,expect,Locator} from "@playwright/test"

test("Verify xpaths", async ({page})=>{
    await page.goto("https://www.flipkart.com/");
    const logo: Locator = page.locator("//img[@title='Flipkart']")
    await expect(logo).toBeVisible();
})

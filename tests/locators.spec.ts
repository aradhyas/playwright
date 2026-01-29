//PW uses DOM (Document Object Model) structure. which is basically HTML that comes in inspect element. It is created by the browser
//from the page source that any domain provides

import {test,expect,Locator} from "@playwright/test"

test("Verify locators", async ({page})=>{
    await page.goto("https://www.flipkart.com/");
    //every image has some 'alt' value. this locator helps to get from image.
    const logo: Locator = page.getByAltText("Get App")
    logo.click()
    await expect(logo).toBeVisible();

    //this locator helps to find by text
    await expect(page.getByText("Flipkart")).toBeVisible();

    //get by role helps when the tag name in html and the role heading is same like button, radio, checkbox
    await page.getByRole("link",{name:'Login'}).click()
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();

    //getting from labels
    await page.getByLabel('First Name:').fill("abc");

    //getting from placeholder value
    await page.getByPlaceholder("Search").fill("iPhone");

    //there is a locator using ToHaveTestID so as to get from ID
})
//selenium uses HTTP protocols which is basically request and response archi. playwright has websocket connection, which opens
// once and then closes after all tests are done
// so the idea is to import test, expect because test helps to write our testcases and expect gives us to validate the output
// async and await goes hand in hand for the asynchronous function where steps can start before the one nefore step ends and await helps to wait
// {page} is known as the fixture
// usually testing happens in bg which is why its called headless, if you want to see you can give 

import {test,expect} from "@playwright/test"

test("Verify a website name", async ({page})=>{
    await page.goto("https://www.flipkart.com/");

    let name: string = await page.title();
    console.log(name);
    await expect(page).toHaveTitle("Flipkart");
})
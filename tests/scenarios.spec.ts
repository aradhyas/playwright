//For form inputs:
// ✅ Label > Placeholder > TestId > CSS
// For clickable actions:
// ✅ Role > Text > TestId > CSS

import {test,expect,Locator} from "@playwright/test";

test('Add a new user', async ({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const addButton = page.getByRole('button', {name: 'Add'})
    await expect(addButton).toBeVisible();
    await addButton.click();

    await page.getByLabel('First Name').fill('ABC');
    await page.getByLabel("Last Name").fill("XYZ");
    await page.getByLabel("Email").fill("abc@example.com");
    await page.getByLabel("Age").fill("26");
    await page.getByLabel("Salary").fill("60000");
    await page.getByLabel("Department").fill("QA");

    await page.getByRole('button', {name: "Submit"}).click()

})


test('Update email', async ({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const row = page.getByRole('row', {name:/alden@example\.com/i})
    await expect(row).toBeVisible();

    const edit_button = row.locator('[title = "Edit"]');
    await expect(edit_button).toBeVisible();
    await edit_button.click();

    const departmentField = page.getByLabel('Department');
    await expect(departmentField).toBeVisible();

    await departmentField.fill('Automation');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(row).toContainText('Automation');

})
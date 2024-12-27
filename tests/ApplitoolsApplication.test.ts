import { test } from "@applitools/eyes-playwright/fixture";

test('AppliApplication', async ({page, eyes}) =>
{
    await page.goto('https://auth.applitools.com/');
    //await page.waitForEvent('load');
    await page.getByPlaceholder('Enter email').fill('shwethashrees@suntechnologies.com');
    await page.getByPlaceholder('Enter password').fill('Shwe@3156');
    await page.getByText('Sign in', {exact : true}).click();
    await page.locator('[fill="none"]').nth(2).click();
    await page.getByText('Create account', {exact : true}).click();
    const test = await page.locator('.list-item');
    console.log(await test.count());
})
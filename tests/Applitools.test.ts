//import test  from "@playwright/test";
import { test } from '@applitools/eyes-playwright/fixture';
import { ADDRGETNETWORKPARAMS } from 'dns';

test('Applitools test', async ({page,eyes}) =>
{   
    await page.goto('/');
    await page.waitForLoadState('load');
    await eyes.check('Form Page');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForLoadState('load');
    await eyes.check('Home Page');
});
test('Applitools Test', async ({page, eyes}) =>
{
    await page.goto('/');
    await page.locator('input#txtUsername').fill('nishanthnayakan');
    await page.locator('input#txtPassword').fill('Nish@nth1#');
    await page.locator('input#btnLogin').click();
    await page.pause();
    await eyes.check('Time Sheet1');
    await page.pause();
    await eyes.check('Time Sheet2');

});
test('Applitools Orange HRM', async ({page,eyes}) =>
{
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name : ' Login '}).click();
    await page.waitForEvent('load');
    await eyes.check('Dashboard Page');
    await page.pause();
    await eyes.check('Myinfo Page');

});
test('Applitools', async ({page, eyes}) =>
{
    await page.goto('/seleniumPractise/#/');
    await eyes.check('Home Page');
    await page.locator('//input[@type="search"]').fill('cucumber');
    await eyes.check('Cart Page');
    await page.getByText('ADD TO CART', {exact : true}).click( );
    await page.locator('//img[@alt="Cart"]').click();
    await eyes.check('Proceed Page');
    await page.getByText('PROCEED TO CHECKOUT', {exact : true}).click();
    await eyes.check('Order Page');
    await page.getByPlaceholder('Enter promo code', {exact : true}).fill('rahulshettyacademy');
    await page.getByText('Apply', {exact : true}).click();
    await eyes.check('Order Page');
    await page.getByText('Place Order', {exact : true}).click();
    await eyes.check('Country Page');
    const countryOptions = await page.locator('//select');
    countryOptions.selectOption('India');
    await page.locator('.chkAgree').click();
    await eyes.check('Country Selected Page');
    await page.getByText('Proceed', {exact : true}).click();
    await eyes.check('Conformatiion Page');





    // await eyes.check('PF Page');
    // await page.pause();
    // await eyes.check('ESI Page');
    // await eyes.check('Featured Page');
    // await page.pause();
    // await eyes.check('Web Page');
    // await page.pause();
    // await eyes.check('Api Page');
});
test.only('RahulShettyAcademy E-Commerce', async ({page,eyes}) =>
{
    await page.goto('/client/');
    await eyes.check('Login Page');
    await page.getByPlaceholder('email@example.com').fill('suntech@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Sun@2024');
    await page.locator('#login').click();
    await page.waitForTimeout(3000);
    await eyes.check('Home Page');
    await page.getByRole('button', {name : ' Add To Cart'}).first().click();
    await page.locator('button.btn-custom').nth(2).click();
    await eyes.check('My Cart Page');
    await page.locator('button.btn-primary').last().click();
    await eyes.check('Payment Page');
    await page.locator("[placeholder*='Country']").pressSequentially('ind');
    await page.getByText(' India', {exact : true}).click();
    await page.getByText('Place Order ', {exact : true}).click();
    await eyes.check('Order page');
    // await page.pause();

});
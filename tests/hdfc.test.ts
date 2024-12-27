import { test } from '@applitools/eyes-playwright/fixture';

test('hdfc', async ({ page, eyes}) => {
    await page.goto('https://www.hdfc.com/');
    await eyes.check('Home Page');
    await page.locator('.exist-custo-menu-link').hover();
    const waiting =   page.context().waitForEvent('page');
    await page.getByRole('link', { name: 'Login To NetBanking' }).click()
    const newPage = await waiting;

    await eyes.check('Personal Page');
    await newPage.locator('button.desktop-login ').last().hover();
    const waiting1 = newPage.context().waitForEvent('page');
    await newPage.locator('.login_link').first().click();
    const newPage1 = await waiting1;

    await eyes.check('Netbanking Page');
    const waiting2 = newPage1.context().waitForEvent('page');
    await newPage1.locator('frame[name="login_page"]').contentFrame().getByRole('link', { name: 'Know More...' }).first().click();
    const newPage2 = await waiting2;
    //const fram = await newPage2.frame({name : 'login_page'});
    //const loc = await newPage2.frameLocator('(//span[@class="lightbluecolor"])[7]');
    //await loc.click();
    //await newPage.pause()
    await newPage2.waitForLoadState('load');
    const langTxt = await newPage2.locator('//div/div/p/a[@rel="noopener noreferrer"]').allTextContents();
    await eyes.check('Secure Banking Page', { timeout: 60000 });
    console.log(langTxt);
    


});
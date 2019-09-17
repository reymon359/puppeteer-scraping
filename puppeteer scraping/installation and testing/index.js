const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'World', { delay: 100 }); // Types slower, like a user
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.screenshot({ path: 'example.png' });

    // await browser.close();

    debugger;
})();
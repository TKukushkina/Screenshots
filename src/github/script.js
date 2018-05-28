const puppeteer = require('puppeteer');
const fs = require('fs');

const URL = 'https://github.com/';

(async () => {

  const dir = './screens';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  page.setViewport({
    width: 1349,
    height: 667,
  })

  await page.goto(URL, {
    waitUntil: ['load'],
    timeout: 30000,
  });

  await page.screenshot({
    path: 'screens/desktop.png',
    clip: {x: 0, y:0, width: 1349, height: 667,},
  })

  await page.screenshot({
    path: 'screens/fullpageDesktop.png',
    fullPage: true,
  })

  await browser.close();
})();


(async () => {

  const dir = './screens';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  page.setViewport({
    width: 375,
    height: 667,
  })

  await page.goto(URL, {
    waitUntil: ['load'],
  });

  await page.waitFor(3000);

  await page.waitForSelector('button[aria-label="Toggle navigation"]');

  await page.click('button[aria-label="Toggle navigation"]');

  await page.screenshot({
    path: 'screens/mobile.png',
    clip: {x: 0, y:0, width: 375, height: 667,},
  })

  await page.screenshot({
    path: 'screens/fullpageMobile.png',
    fullPage: true,
  })

  await browser.close();
})();
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://127.0.0.1:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });


import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig<EyesFixture>({

  reporter: '@applitools/eyes-playwright/reporter',

  use: {
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      /* The following and other configuration parameters are documented at: <url> */
      apiKey: 'hzgzxLMcTFovjxEP470r9L22kfXoLEGfRSyh5u7KW108E110', // alternatively, set this via environment variable APPLITOOLS_API_KEY
      // type: 'ufg',
      // browsersInfo: [
      //   { name: 'chrome', width: 800, height: 600 },
      //   { name: 'firefox', width: 1024, height: 768 },
      //   {
      //     name: 'safari',
      //     width: 375,
      //     height: 667,
      //     deviceScaleFactor: 2,
      //     isMobile: true,
      //   },
      // ],
    },

    //baseURL: 'https://www.saucedemo.com',
    //baseURL: 'http://hrm.sti.com',
    //baseURL: 'https://opensource-demo.orangehrmlive.com',
    //baseURL: 'https://auth.applitools.com',
    //baseURL: 'https://rahulshettyacademy.com', //'https://unifiedportal-mem.epfindia.gov.in',//'https://www.browserstack.com',
    baseURL: 'https://rahulshettyacademy.com',
    viewport: { height: 720, width: 1280 }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
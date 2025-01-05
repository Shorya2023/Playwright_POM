import { defineConfig, devices } from '@playwright/test';
import type { GitHubActionOptions } from '@estruyf/github-actions-reporter';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  reporter:[['html'],['@estruyf/github-actions-reporter', <GitHubActionOptions>{
    title: 'My custom title',
    useDetails: true,
    showError: true
  }], ['allure-playwright', { resultsDir: 'allure-results' }]],
 
  // reporter:[['html'], ['allure-playwright', { resultsDir: 'allure-results' }],['./Util/custom-reporter.ts']],
  use: {
    viewport: { width: 1920, height: 1080 },
    
    headless:true,
    screenshot:'on',
    trace: 'on',  
    video: {
              mode:'retain-on-failure',
              size: {width:640, height:480}
          }
 
  },

  projects: [
    {
      name:'setup', 
      testMatch: '**/*.setup.spec.ts',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
    },
      // dependencies: ['setup'],
  },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup'],
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],
    }, {
      name: 'chrome@latest:Windows 10',
      use: {
        browserName: 'chromium',
        browserStack: {
          os: 'Windows',
          osVersion: '10',
          browserVersion: 'latest',
          user: "shoryabeohar_xPozbC", // BrowserStack username
          key: "mrsahaH6sJoySYHYH1ya", // BrowserStack access key
          buildName: 'playwright-build', // Optional build name
          sessionName: 'playwright-session', // Optional session name
        },
      },
    }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

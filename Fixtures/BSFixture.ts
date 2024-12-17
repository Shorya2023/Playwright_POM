import { test as base, Browser } from '@playwright/test';
import { BrowserStackLauncher } from 'browserstack-automate';

let BrowserStack_Browser:Browser
const browserStackLauncher = new BrowserStackLauncher({
  browserstack: {
    username: "shoryabeohar_xPozbC",
    access_key: "mrsahaH6sJoySYHYH1ya",
  },
});


const test = base.extend({ BrowserStack_Browser: async ({ playwright }, use) =>
     { // Launch the browser via BrowserStack 
const BrowserStack_Browser = await browserStackLauncher.launch(playwright); 
await use(BrowserStack_Browser); await BrowserStack_Browser.close(); }, });
 export { test };
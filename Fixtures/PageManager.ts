import {test,expect, chromium, page, Browser} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import { Context } from 'vm';

let page:page
let context:Context
let browser:Browser

test.beforeAll(async()=>{

        browser= await chromium.launch();
        context= await browser.newContext();
        page= await context.newpage();

        await page.goto(LoginDetails.url);
})


test.afterAll(async()=>{

await page.close();
await context.close();
await browser.close();

})
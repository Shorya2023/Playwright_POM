import path from 'path';
import {page,test,expect} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';

let filepath="./playwright/.auth/auth.json"
test("Login auth", async({page,browser})=>{
   
   let context= await browser.newContext();
      page   = await context.newPage();
    Actions.log("****************test started.."+(test.info().title).toUpperCase()+"*****************")

    logstep("1.Launch browser &  Navigate to url 'http://automationexercise.com'")
    // await Actions.navigateToURL(LoginDetails.url);
     await page.goto(LoginDetails.url);

    logstep("Enter email address")
    await page.locator("//form[@action='/login']//input[@name='email']").fill(LoginDetails.username);

    logstep("Enter password")
    // await Actions.fill(Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='password']"),LoginDetails.password);
    await page.locator("//form[@action='/login']//input[@name='password']").fill(LoginDetails.password);

    logstep("Click On Login/Signin")
    await page.locator("//button[text()='Login']").click();

    logstep("Saving storage state")
    await page.context().storageState({path: filepath});
     Actions.log("test finished.."+test.info().title)

});


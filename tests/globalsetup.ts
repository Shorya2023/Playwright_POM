import path from 'path';
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';

let filepath="./playwright/.auth/auth.json"
test("Login auth", async({pages})=>{

    logstep("1.Launch browser &  Navigate to url 'http://automationexercise.com'")
    await Actions.navigateToURL(LoginDetails.url);

    logstep("Enter email address")
    await Actions.fill(Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='email']"),LoginDetails.username);

    logstep("Enter password")
    await Actions.fill(Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='password']"),LoginDetails.password);

    logstep("Click On Login/Signin")
    await Actions.clickElement(Actions.getXPATHCSSLocator("//button[text()='Login']"));
    await Actions.wait(2000);
    await Assert.expectToBeVisible(Actions.getXPATHCSSLocator("//ul[@class='nav navbar-nav']//li[10]"));
    await page.context().storageState({path: filepath});
    
});


import { LoginDetails } from '../Testdata/Data.json'
import { Actions } from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { page, Locator } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
import{Page} from '@playwright/test'

export class ContactUs {

    readonly demo_page: Page;
    readonly Successmessage: Locator
    readonly input_Name: Locator;
    readonly input_Email: Locator;
    readonly input_Message: Locator;
    readonly input_Subject: Locator;
    readonly file_Upload: Locator;
    readonly btn_Submit: Locator;
    readonly  textFeedback: Locator




    constructor(demo_page: Page) {
        this.demo_page = demo_page;
        //  this.link_Login= Actions.getCustomLocator('xpath_css','#login2');        
        this.input_Name = Actions.getXPATHCSSLocator("//input[@name='name']");
        this.input_Email = Actions.getXPATHCSSLocator("//input[@name='email']");
        this.input_Subject = Actions.getXPATHCSSLocator("//input[@name='subject']")
        this.file_Upload = Actions.getXPATHCSSLocator("//input[@name='upload_file']")
        this.btn_Submit = Actions.getXPATHCSSLocator("[name='submit']");
        this.input_Message = Actions.getXPATHCSSLocator("#message");
        this.Successmessage = Actions.getCustomLocatorByText("Success! Your details have been submitted successfully.");
        this.textFeedback = Actions.getXPATHCSSLocator(".contact-info h2")
    }



    async enterContactForm() {
        // await Actions.fill(this.input_Name, "roni");
         await Actions.waitForVisibLeClickable(this.input_Email)
         await Actions.fill(this.input_Email, "JOH2roniN@yahoo.com");
         await Actions.wait(2000);
         await Actions.uploadFile(this.file_Upload, "D:/Automation/Playwright_POM/DownloadFile/Upload1.txt");
         await Actions.KeysOnElement(this.file_Upload,'Tab');
         await Actions.wait(1000);
         await Actions.scrollTOTheElement(this.textFeedback);
         await page.focus("[name='submit']");
         await Actions.clickElement(this.btn_Submit)
         await Actions.acceptDialogs();
    }




}
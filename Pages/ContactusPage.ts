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




    constructor(demo_page: Page) {
        this.demo_page = demo_page;
        //  this.link_Login= Actions.getCustomLocator('xpath_css','#login2');        
        this.input_Name = Actions.getXPATHCSSLocator("//input[@name='name']");
        this.input_Email = Actions.getXPATHCSSLocator("//input[@name='email']");
        this.input_Subject = Actions.getXPATHCSSLocator("//input[@name='subject']")
        this.file_Upload = Actions.getXPATHCSSLocator("//input[@name='upload_file']")
        this.btn_Submit = Actions.getXPATHCSSLocator("//input[@name='submit']");
        this.input_Message = Actions.getXPATHCSSLocator("#message");
        this.Successmessage = Actions.getCustomLocatorByText("Success! Your details have been submitted successfully.");

    }



    async enterContactForm() {
        await Actions.uploadFile(this.file_Upload, "C:/Users/lenovo/Documents/Upload.txt");
        // await Actions.fill(this.input_Name, "roni");
         await Actions.fill(this.input_Email, "JOH2roniN@yahoo.com");
        // await Actions.fill(this.input_Message, "poduct is damage and need return and reund which required additiona documents to supports the investigation");
        // await Actions.fill(this.input_Subject,"required investigation"); 
        // await Actions.uploadFile(this.file_Upload, "C:/Users/lenovo/Documents/Upload.txt");
        await Actions.scrollTOTheElement(this.btn_Submit);
        await Actions.clickElement(this.btn_Submit);
        await Actions.acceptDialogs();
    }




}
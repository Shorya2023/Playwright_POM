import {Locator, Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { sharedPage } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
  export  class SignupPage{
        readonly demo_page: Page;
        readonly input_password: Locator
        readonly input_fisrtName : Locator;
        readonly list_country : Locator ;
        readonly btn_createAccount : Locator;
        readonly input_state : Locator;
        readonly input_city : Locator;
        readonly input_zipcode : Locator;
        readonly input_mobnumber : Locator;


    constructor(demo_page:Page)
    {
        this.demo_page= demo_page;
         this.input_fisrtName=





    }

    async loginToApp(username:string, password:string)
    {
         logstep("1.Launch browser &  Navigate to url 'http://automationexercise.com'")
         await Actions.navigateToURL(LoginDetails.url);

         logstep("Enter email address")
         await Actions.fill(this.input_username,username);

         logstep("Enter password")
         await Actions.fill(this.input_passsword,password);

         logstep("Click On Login/Signin")
         await Actions.clickElement(this.btn_Login);
         await Actions.wait(2000);      
    }


    async newUserSignup()
    {
        await Actions.fill(this.input_Newusername,newUserName);
        await Actions.fill(this.input_Newpasssword,newPassword);

    }
}

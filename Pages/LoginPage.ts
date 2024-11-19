import {Locator, Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { sharedPage } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
  export  class LoginPage{
        readonly demo_page: Page;
        readonly IncorrectLoginMessage: Locator
        readonly input_username : Locator;
        readonly input_passsword : Locator ;
        readonly btn_Login : Locator;

    constructor(demo_page:Page)
    {
        this.demo_page= demo_page;
      //  this.link_Login= Actions.getCustomLocator('xpath_css','#login2');        
        this.input_username=  Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='email']")
        this.input_passsword=Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='password']")
        this.btn_Login = Actions.getXPATHCSSLocator("//button[text()='Login']");
        this.IncorrectLoginMessage=Actions.getCustomLocatorByText("Your email or password is incorrect!");
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
}

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
        readonly input_newUsername : Locator;
        readonly input_NewEmail : Locator ;
        readonly btn_Signup : Locator;
        readonly accountCreated:Locator;

    constructor(demo_page:Page)
    {
        this.demo_page= demo_page;
      //  this.link_Login= Actions.getCustomLocator('xpath_css','#login2');        
        this.input_username=  Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='email']")
        this.input_passsword=Actions.getXPATHCSSLocator("//form[@action='/login']//input[@name='password']")
        this.btn_Login = Actions.getXPATHCSSLocator("//button[text()='Login']");
        this.input_newUsername=  Actions.getXPATHCSSLocator("//form[@action='/signup']//input[@name='name']")
        this.input_NewEmail=Actions.getXPATHCSSLocator("//form[@action='/signup']//input[@name='email']")
        this.btn_Signup = Actions.getXPATHCSSLocator("//button[text()='Signup']");
        this.IncorrectLoginMessage=Actions.getCustomLocatorByText("Your email or password is incorrect!");
        this.accountCreated=Actions.getCustomLocatorByText("Account Created!");
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
            let val = Actions.getRandomInt(10,250);
        await Actions.fill(this.input_newUsername,"newUserName");
        await Actions.fill(this.input_NewEmail,"newemial_"+val+"@gmail.com");
        await Actions.clickElement(this.btn_Signup);
    }
}

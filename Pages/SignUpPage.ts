
import {Locator, Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { sharedPage } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
import {newUserSignupDetails} from '../Testdata/newUserSignupDetails.json'
  export  class SignupPage{
        readonly demo_page: Page;
        readonly input_password: Locator
        readonly input_fisrtName : Locator;
        readonly input_LastName : Locator;
        readonly input_address : Locator;
        readonly list_country : Locator ;
        readonly btn_createAccount : Locator;
        readonly input_state : Locator;
        readonly input_city : Locator;
        readonly input_zipcode : Locator;
        readonly input_mobnumber : Locator;


    constructor(demo_page:Page)
    {
        this.demo_page= demo_page;
         this.input_fisrtName=Actions.getXPATHCSSLocator("#first_name");
         this.input_LastName=Actions.getXPATHCSSLocator("#last_name");
         this.input_address=Actions.getXPATHCSSLocator("#address1");
         this.input_city=Actions.getXPATHCSSLocator("#city")  
         this.input_mobnumber=Actions.getXPATHCSSLocator("#mobile_number");
         this.input_password=Actions.getXPATHCSSLocator("#password");
         this.input_state=Actions.getXPATHCSSLocator("#state");
         this.input_zipcode=Actions.getXPATHCSSLocator("#zipcode")
         this.list_country=Actions.getXPATHCSSLocator("#country")
         this.btn_createAccount=Actions.getXPATHCSSLocator(".btn[data-qa='create-account']");
    }

    async newUserSignupDetails()
    {
        
        await Actions.fill(this.input_fisrtName,newUserSignupDetails.input_fisrtName);
        await Actions.fill(this.input_LastName,newUserSignupDetails.input_LastName);
        await Actions.fill(this.input_password,newUserSignupDetails.input_password);
        await Actions.fill(this.input_address,newUserSignupDetails.input_address);
        await Actions.fill(this.input_city,newUserSignupDetails.input_city);
        await Actions.fill(this.input_state,newUserSignupDetails.input_state);
        await Actions.fill(this.input_zipcode,newUserSignupDetails.input_zipcode);
        await Actions.fill(this.input_mobnumber,newUserSignupDetails.input_mobnumber); 
        await Actions.selectOption(this.list_country,newUserSignupDetails.list_country);
        await Actions.clickElement(this.btn_createAccount);
    }
}

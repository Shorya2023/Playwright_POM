import {Locator, page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { page } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
  export  class Signuppage{
        readonly demo_page: page;
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


    constructor(demo_page:page)
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
        
        await Actions.fill(this.input_fisrtName,"john");
        await Actions.fill(this.input_LastName,"davis");
        await Actions.fill(this.input_password,"231davis");
        await Actions.fill(this.input_address,"B 1 ammmi road CA");
        await Actions.fill(this.input_city,"NY");
        await Actions.fill(this.input_state,"NC");
        await Actions.fill(this.input_zipcode,"457812");
        await Actions.fill(this.input_mobnumber,"+555852365896"); 
        await Actions.selectOption(this.list_country,"Canada");
        await Actions.clickElement(this.btn_createAccount);
    }
}

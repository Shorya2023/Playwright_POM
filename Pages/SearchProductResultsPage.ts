import {Locator, Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { sharedPage } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
 export class searchResults{

    readonly demo_page: Page;
    readonly Product_name: Locator;
    // readonly Product_category: Locator;
    readonly Product_price: Locator;
    readonly Product_image: Locator;
    // readonly Product_condition: Locator;
    // readonly Product_brand: Locator;
    // readonly Product_Quantity:Locator

    constructor(page:Page)
        {
            this.demo_page=page;
            this.Product_name=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//p");
            this.Product_image=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//img");
            this.Product_price=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//h2");
        }


        

    }
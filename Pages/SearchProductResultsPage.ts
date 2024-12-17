import {Locator,Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { page } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
 export class searchResults{

    readonly demo_page: Page;
    readonly Product_name: Locator;
    // readonly Product_category: Locator;
    readonly Product_price: Locator;
    readonly Product_image: Locator;
    readonly addToCart: Locator;
    readonly proceedTocheckout: Locator;
    readonly LabelRegisterLogin: Locator;
    readonly RegisterLogin: Locator;
    // readonly Product_Quantity:Locator

    constructor(page:Page)
        {
            this.demo_page=page;
            this.Product_name=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//p");
            this.Product_image=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//img");
            this.Product_price=Actions.getXPATHCSSLocator("//div[@class='productinfo text-center']//h2");
            this.addToCart = Actions.getXPATHCSSLocator("//div[@class='product-information']//span//button");
            this.proceedTocheckout=Actions.getCustomLocatorByText("Proceed To Checkout");
            this.LabelRegisterLogin=Actions.getCustomLocatorByText("Register / Login account to proceed on checkout.");
            this.RegisterLogin=Actions.getXPATHCSSLocator(".modal-body a");
        }

        async clickOnAddToCart()
        {
            await Actions.highlightElement(this.addToCart)
            await Actions.hoverAndClick(this.addToCart);
        }

        async clickOnProceedToCheckout()
        {
            await Actions.clickElement(this.proceedTocheckout);
        }

        async clickOnregister()
        {
            await Actions.hoverAndClick(this.RegisterLogin);
        }

    }
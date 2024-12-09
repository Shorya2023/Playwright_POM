import {Locator} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { page } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
 export class viewProduct{

    readonly demo_page: page;
    readonly Product_name: Locator;
    readonly Product_category: Locator;
    readonly Product_price: Locator;
    readonly Product_aval: Locator;
    readonly Product_condition: Locator;
    readonly Product_brand: Locator;
    readonly Product_Quantity:Locator;
    readonly addtocart: Locator;



    constructor(page:page)
        {
            this.demo_page=page;
            this.Product_name=Actions.getXPATHCSSLocator("//div[@class='product-information']//h2");
            this.Product_category=Actions.getXPATHCSSLocator("//div[@class='product-information']//p[1]");
            this.Product_price=Actions.getXPATHCSSLocator("//div[@class='product-information']//span//span");
            this.Product_Quantity=Actions.getXPATHCSSLocator("//div[@class='product-information']//span//label");
            this.Product_aval=Actions.getXPATHCSSLocator("//div[@class='product-information']//p[2]");
            this.Product_condition=Actions.getXPATHCSSLocator("//div[@class='product-information']//p[3]");
            this.Product_brand=Actions.getXPATHCSSLocator("//div[@class='product-information']//p[4]");
            this.addtocart=Actions.getXPATHCSSLocator(".product-information button");
        }

     async addTocart_productDetail()
        {
             try{
                await Actions.clickElement(this.addtocart); 
                 console.log("Add to cart clicked successfully")
             }
             catch(error)
             {
               console.error("Errror- addToCart not clicked");
               
             }
       }
     
        

    }
import {Locator, Page} from '@playwright/test'
import {LoginDetails} from '../Testdata/Data.json'
import {Actions} from '../Util/Actions'
import * as allure from "allure-js-commons";
import { Assert } from '../Util/Assert';
import { sharedPage } from '../Fixtures/CustomFixtures';
import { logstep } from '../Util/AllurLogs';
 export class AllProducts{

    readonly demo_page: Page;
    readonly Category: Locator;
    readonly Brands: Locator;
    readonly productAddedLabel: Locator;
    readonly productImage: Locator;

    constructor(page:Page)
        {
            this.demo_page=page;
            this.Category=Actions.getCustomLocatorByText("CATEGORY");
            this.Brands=Actions.getCustomLocatorByText("BRANDS");
            this.productAddedLabel=Actions.getCustomLocatorByText("Your product has been added to cart.");
            this.productImage=Actions.getXPATHCSSLocator("//div[@class='features_items']//img");
        }


    async getAllproductsPageTiltle()
        {
           const allPGtitle =  await Actions.getPageTitle();
           console.log("Title-------"+allPGtitle);
           return allPGtitle;           
        }

    async CategorySection()
        {
            return this.Category;
        }


    async BrandSection()
        {
            return this.Brands;
        }
        

    async displayAllProducts()
        {
                 const arrProductList=await Actions.getArrayOfElement(this.productImage)
                 for (let pr of arrProductList)
                 {
                        const productdisplay = await pr.textContent();
                        console.log(productdisplay);
                    
                 }
        }


      async addToCart(sproduct:string)
        {   
            await Actions.clickOnAddToCart_Product(sproduct);
            
        }

        







 }
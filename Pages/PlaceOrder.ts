import{Page} from '@playwright/test'
import { step,sharedPage,expect,Locator} from '../Fixtures/CustomFixtures';
import { Actions } from '../Util/Actions';

export class PlaceOrder{

    readonly demo_page: Page;
    readonly Product_link: Locator;
    readonly Addtocart_link: Locator;
    readonly Cart_link: Locator;
   // readonly PlaceOrder_btn: Locator;
    readonly ProductOrdered: Locator;

    constructor(demo_page:Page)
    {
            this.demo_page=demo_page;
            this.Product_link=Actions.getCustomLocator("text","ASUS Full HD");
            this.Addtocart_link=Actions.getCustomLocator("xpath_css","//a[@class='btn btn-success btn-lg']");
            this.Cart_link=Actions.getCustomLocator("xpath_css","//a[@id='cartur']");
            this.ProductOrdered=Actions.getCustomLocator("xpath_css","//tbody//td[2]");
            // this.PlaceOrder_btn = Actions.getCustomLocator('role',{role:'button',options: {name: 'Place Order'}});
    }

    @step("**********Clicking On product**********")
    async clickOnProduct()
    {
        await Actions.clickElement(this.Product_link);   
    }


    @step("**********Add products to cart**********")
    async AddtocartProducts()
    {
        await Actions.clickElement(this.Addtocart_link);
    }


    @step("********************Click on to view cart********************")
    async ClickOnviewCart()
    {
        await Actions.clickElement(this.Cart_link);
    }


    @step("********************Products Order text**********")
    async verifyProductsAdded()
    {
       return await Actions.getTextContent(this.ProductOrdered);
    }


    @step("**************Place Order**********")
    async PlaceOrder()
    {
      //  await Actions.clickElement(this.PlaceOrder_btn);
    }






}
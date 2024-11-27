import{Page} from '@playwright/test'
import { step,sharedPage,expect,Locator} from '../Fixtures/CustomFixtures';
import { Actions } from '../Util/Actions';

export class CheckoutPage{

    readonly demo_page: Page;
    readonly Proceed_Tocheckout: Locator;
    readonly productTable: Locator;
   // readonly PlaceOrder_btn: Locator;

    constructor(demo_page:Page)
    {
            this.demo_page=demo_page;
            this.Proceed_Tocheckout=Actions.getCustomLocatorByText("Proceed To Checkout");
            this.productTable=Actions.getXPATHCSSLocator("#cart_info_table");
            
    }

    async sTextExists()
    {
        
    }

}
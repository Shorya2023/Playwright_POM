import { step,page,expect,Locator} from '../Fixtures/CustomFixtures';
import { Actions } from '../Util/Actions';

export class Checkoutpage{

    readonly demo_page: page;
    readonly Proceed_Tocheckout: Locator;
    readonly productTable: Locator;
    readonly DeliveryAddress:Locator
    readonly BilingAddress:Locator
    readonly textArea:Locator
    readonly PlaceOrder: Locator
    readonly addressVerify: Locator;
    readonly bilingaddressVerify:Locator;

    constructor(demo_page:page)
    {
            this.demo_page=demo_page;
            this.Proceed_Tocheckout=Actions.getCustomLocatorByText("Proceed To Checkout");
            this.productTable=Actions.getXPATHCSSLocator("#cart_info_table");
            this.DeliveryAddress=Actions.getXPATHCSSLocator("#address_delivery h3")
            this.BilingAddress=Actions.getXPATHCSSLocator("#address_invoice h3")
            this.textArea=Actions.getXPATHCSSLocator("textArea");
            this.addressVerify = Actions.getXPATHCSSLocator("#address_delivery li:nth-child(4)");
            this.PlaceOrder=Actions.getCustomLocatorByText("Place Order");
            this.bilingaddressVerify=Actions.getXPATHCSSLocator("#address_invoice li:nth-child(4)")
    }

    async sTextExists()
    {
        
    }

}
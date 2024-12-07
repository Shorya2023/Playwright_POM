//extend existing test
//shud return pageobject 
//page as a fixture
//export it
import { Browser,Page,test as basetest } from '@playwright/test'

import { LoginPage } from '../Pages/LoginPage';
import { Homepage } from '../Pages/HomePage'
import { OrderInfo } from '../Pages/OrderInfo';
import { PlaceOrder } from '../Pages/PlaceOrder';
import { ContactUs } from '../Pages/ContactusPage';
import {AllProducts} from '../Pages/ALLProductPage';
import { viewProduct } from '../Pages/ViewProductDetailPage';
import { Context } from 'vm';
import { searchResults } from '../Pages/SearchProductResultsPage';
import { SignupPage } from '../Pages/SignUpPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import {Paymentpage} from '../Pages/PaymentPage'

let sharedPage: Page;
let sharedcontext: Context;
let sharedbowser: Browser;

type Fixtures = {
    pages: {
        objloginpage: LoginPage;
        objhomepage: Homepage;
        objorderinfo: OrderInfo;
        objplaceorder: PlaceOrder;
        objContactus: ContactUs;
        objAllProducts:AllProducts;
        objviewProduct: viewProduct;
        objsearchResulsProduct:searchResults;
        objSignUp: SignupPage;
        objCheckout:CheckoutPage;
        objPayment: Paymentpage;
    },
    LoginFixture: (username: string, password: string) => Promise<void>;
    LogoutFixture: () => Promise<void>;
}

export const test = basetest.extend<Fixtures>({
    //Fixtures for POM instances
    pages: async ({browser}, use) => {    
            const sharedcontext  = await browser.newContext();
            sharedPage = await sharedcontext.newPage();
            
            //Fixtures for POM instances and passing shred page instances 
        const objloginpage = new LoginPage(sharedPage);
        const objhomepage = new Homepage(sharedPage);
        const objorderinfo = new OrderInfo(sharedPage);
        const objplaceorder = new PlaceOrder(sharedPage);    
        const objContactus  = new ContactUs(sharedPage); 
        const objAllProducts= new AllProducts(sharedPage);  
        const objviewProduct= new viewProduct(sharedPage);  
        const objsearchResulsProduct= new searchResults(sharedPage);  
        const objSignUp= new SignupPage(sharedPage);
        const objCheckout = new CheckoutPage(sharedPage);
        const objPayment= new Paymentpage(sharedPage)

        await use({objloginpage,objAllProducts, objviewProduct,objhomepage,
                     objorderinfo, objplaceorder,objContactus,objsearchResulsProduct,objSignUp,objCheckout,objPayment});
    },

     //login to app Fixture
    LoginFixture: async ({ pages }, use) => {
        await use((username: string, password: string) =>
                    pages.objloginpage.loginToApp(username, password))
    },

    //logout fixture
    LogoutFixture: async ({ pages}, use) => {
        await use(() => pages.objhomepage.Logout());

    }


})


export { expect,Locator} from '@playwright/test';
export {sharedPage} ;
export {sharedcontext};
export {sharedbowser};




//Decorators used for every step descriptions 
export function step(stepName?: string)
{
    return function decorators(
        target:  Function,
        context: ClassMethodDecoratorContext 
    )
    {
        return (...args: any) =>
        {
            const name =
            stepName || `${this.constructor.name}.${context.name as string}`
            return test.step(name, async ()=>
            {
                return  await target.call(this, ...args)
            })
        }
    }

}

//extend existing test
//shud return pageobject 
//page as a fixture
//export it
import { Page,BrowserContext, Browser,test as basetest } from '@playwright/test'
import { Loginpage } from '../Pages/LoginPage'
import { Homepage } from '../Pages/HomePage'
import { OrderInfo } from '../Pages/OrderInfo';
import { PlaceOrder } from '../Pages/PlaceOrder';
import { ContactUs } from  '../Pages/ContactusPage'
import {AllProducts} from '../Pages/ALLProductPage';
import { viewProduct } from '../Pages/ViewProductDetailPage';``
import { searchResults } from '../Pages/SearchProductResultsPage';
import { Signuppage } from '../Pages/SignUpPage';
import { Checkoutpage } from '../Pages/CheckoutPage';
import {Paymentpage} from '../Pages/PaymentPage';
import fs  from 'fs';

// let page: page;
// let sharedcontext: Context;
// let sharedbowser: Browser;


let filepath="./playwright/.auth/auth.json"
let page:Page;
let context:BrowserContext;

type Fixtures = {
    pages: {
        objloginpage: Loginpage;
        objhomepage: Homepage;
        objorderinfo: OrderInfo;
        objplaceorder: PlaceOrder;
        objContactus: ContactUs;
        objAllProducts:AllProducts;
        objviewProduct: viewProduct;
        objsearchResulsProduct:searchResults;
        objSignUp: Signuppage;
        objCheckout:Checkoutpage;
        objPayment: Paymentpage;
    },
    LoginFixture: (username: string, password: string) => Promise<void>;
    LogoutFixture: () => Promise<void>;

}

export const test = basetest.extend<Fixtures>({
                //Fixtures for POM instances
                pages: async ({browser}, use) => {                   
                context = await browser.newContext();
                // Create a new page inside context.
                page = await context.newPage();
                    
         //Fixtures for POM instances and passing  page instances 
        const objloginpage = new Loginpage(page);        
        const objhomepage = new Homepage(page);
        const objorderinfo = new OrderInfo(page);
        const objplaceorder = new PlaceOrder(page);    
        const objContactus  = new ContactUs(page); 
        const objAllProducts= new AllProducts(page);  
        const objviewProduct= new viewProduct(page);  
        const objsearchResulsProduct= new searchResults(page);  
        const objSignUp= new Signuppage(page);
        const objCheckout = new Checkoutpage(page);
        const objPayment= new Paymentpage(page)

        await use({objloginpage,objAllProducts, objviewProduct,objhomepage,
                     objorderinfo, objplaceorder,objContactus,objsearchResulsProduct,objSignUp,objCheckout,objPayment});
    },

     //login to app Fixture
    LoginFixture: async ({ pages }, use) => {
        await use((username: string, password: string) =>
                    pages.objloginpage.loginToApp(username, password))
    
    },

    //logout fixture
    LogoutFixture: async ({ pages,browser}, use) => {
        await use(() => pages.objhomepage.Logout());
          await page.close();
    },

})


export { expect,Locator} from '@playwright/test';
export {page,context,Browser} ;


// // Function to log messages
// export function log(Message:any)
// {
//     logMessage.push(Message);
//     console.log(Message);   
//     fs.writeFileSync('..Logs/log.txt', logMessage.join('\n'), 'utf8');
// }


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

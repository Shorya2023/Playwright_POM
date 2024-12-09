import { Actions } from '../Util/Actions';
import { page,Locator, expect } from '../Fixtures/CustomFixtures';
 export class Homepage{
    readonly demo_page: page;
  //  readonly Monitor_link: Locator;
    readonly logout_link: Locator;
    readonly HomepageTitle: Locator;
    readonly userName: Locator;
    readonly btnTestCase: Locator;
    readonly btnApiListForPractice: Locator;
    readonly labelTestCases:Locator;
    readonly searchProduct: Locator;
    readonly submitSearch:Locator;
    readonly susbscribe_email:Locator;
    readonly btnSubscribe: Locator;
    readonly LabelEmail:Locator;
    readonly NewuserSignUp: Locator;
    readonly featuredItem:Locator;
    readonly allLinks:Locator;
    readonly Continue:Locator;
    readonly OrderPlaced:Locator;
    readonly DownoadInvoice:Locator;

    constructor(demo_page:page)
    {     
        this.demo_page= demo_page;
        //this.userName=Actions.getXPATHCSSLocator("")
        this.logout_link=Actions.getCustomLocator('xpath_css','#logout2');
        this.HomepageTitle = Actions.getCustomLocator("xpath_css","//a[@id='nava']");
        this.userName=Actions.getXPATHCSSLocator("//ul[@class='nav navbar-nav']//b")
        this.btnTestCase=Actions.getXPATHCSSLocator("//div[@class='item active']//button[@type='button'][normalize-space()='Test Cases']")
        this.btnApiListForPractice=Actions.getRoleLocator({'role':'button',name:'APIs list for practice'});
        this.labelTestCases = Actions.getCustomLocatorByText("Cases");
        this.searchProduct=Actions.getXPATHCSSLocator('#search_product');
        this.submitSearch=Actions.getXPATHCSSLocator('#submit_search');
        this.susbscribe_email=Actions.getXPATHCSSLocator('#susbscribe_email');
        this.btnSubscribe=Actions.getXPATHCSSLocator('#subscribe')
        this.LabelEmail=Actions.getCustomLocatorByText("You have been successfully subscribed!");       
        this.NewuserSignUp=Actions.getCustomLocatorByText("New User Signup!");
        this.featuredItem =Actions.getXPATHCSSLocator(".features_items")
        this.allLinks=Actions.getXPATHCSSLocator("//a");
        this.Continue=Actions.getXPATHCSSLocator(".pull-right .btn");
        this.OrderPlaced=Actions.getXPATHCSSLocator(".title b");
        this.DownoadInvoice=Actions.getCustomLocatorByText("Download Invoice");
    }

    async pagetitle() 
    {
        const homePgTitle = Actions.getpageTitle();
         return homePgTitle;
    }

    async clickOnTestCase()
    {
        await this.btnTestCase.click();
    }

    async clickOnAPI()
    {
        await this.btnApiListForPractice.click();
    }

    async totalLink()
    {
        const Links = await Actions.getArrayOfElement("//a");
        return Links.length;

    }

    async DisplayLinks()
    {
        const Links =await Actions.getArrayOfElement("//a");
        for(const ln of Links)
        {
            const value = await ln.innerText();
            console.log(value);     
        }
    }


    async ProductExists(sProducts: string)
    {
        const Links = await Actions.getArrayOfElement("//a");     
        for(const ln of Links)
        {
                        const value = await ln.textContent();
                if (value==sProducts)
                {
                    return true;
                    break;
                }            
        }
    }


    async  searchProducts(sProductName: string)
    {
        await Actions.fill(this.searchProduct,sProductName);
        await Actions.clickElement(this.submitSearch);
    }

    async Susbscribe_email(sEmail:string)
    {
        await Actions.fill(this.susbscribe_email, sEmail);
        await Actions.clickElement(this.btnSubscribe);
    }

    async Logout()
    {
        await Actions.clickOnLink_OnTopHeader("Logout")
    }
    




 }

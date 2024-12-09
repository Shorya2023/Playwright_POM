import {page,Locator,expect} from '../Fixtures/CustomFixtures'
import {OrderInfoDetails} from  "../Testdata/Data.json"
import {Actions} from '../Util/Actions';

export class OrderInfo{

    readonly demo_page: page;
    readonly input_Name: Locator;
    readonly input_Country: Locator;
    readonly input_City: Locator;
    readonly input_CreditCard: Locator;
    readonly input_Month: Locator;
    readonly input_Year: Locator;
   // readonly btn_Purchase: Locator;
    readonly btn_closePLaceOrder: Locator;
    readonly btn_OK:Locator;
    readonly Text_Ordermessage: Locator;
    readonly Text_OrderInfo_ID: Locator;

    constructor(demo_page:page)
    {    
            this.demo_page= demo_page;    
            this.input_Name= Actions.getCustomLocator("xpath_css","//label[@for='name']//following::input[@id='name']");
            this.input_Country=Actions.getCustomLocator("xpath_css","//input[@id='country']")
            this.input_City=Actions.getCustomLocator("xpath_css","//input[@id='city']")
            this.input_CreditCard=Actions.getCustomLocator("xpath_css","//input[@id='card']")
            this.input_Month=Actions.getCustomLocator("xpath_css","//input[@id='month']")
            this.input_Year=Actions.getCustomLocator("xpath_css","//input[@id='year']")
           // this.btn_Purchase=Actions.getCustomLocator('role',{role:'button',options:{name: "Purchase"}})
            this.btn_closePLaceOrder = Actions.getCustomLocator("xpath_css","//div[@id='orderModal']//button[text()='Close']")
            this.btn_OK= Actions.getCustomLocator("xpath_css","//button[text()='OK']")
            this.Text_Ordermessage= Actions.getCustomLocator("xpath_css","Thank you for your purchase!");
            this.Text_OrderInfo_ID= Actions.getCustomLocator("xpath_css","//P[@class='lead text-muted ']");
        }

    async EnterOrderInformation()
    {
          Actions.fill(this.input_Name,OrderInfoDetails.Name);
          Actions.fill(this.input_Country,OrderInfoDetails.Country);
          Actions.fill(this.input_City,OrderInfoDetails.City);
          Actions.fill(this.input_CreditCard,OrderInfoDetails.CreditCard);
          Actions.fill(this.input_Month,OrderInfoDetails.Month);
          Actions.fill(this.input_Year,OrderInfoDetails.Year);
       //   Actions.clickElement(this.btn_Purchase);
   //     await this.btn_closePLaceOrder.click();
   
    }

    async clickOnPurchase()
    {
      //  Actions.clickElement(this.btn_Purchase);
    }

    async clickOnOk()
    {
        Actions.clickElement(this.btn_OK);
    }

    async orderMessage()
    {

        const textValue = Actions.getTextContent(this.Text_Ordermessage);
        return textValue;
    }

    async orderInfo()
    {
        const textValue = Actions.getTextContent(this.Text_OrderInfo_ID);
        return textValue; 
    }

}

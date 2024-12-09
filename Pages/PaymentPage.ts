
import { step,page,expect,Locator} from '../Fixtures/CustomFixtures';
import { Actions } from '../Util/Actions'
import {CardDetails} from '../Testdata/newUserSignupDetails.json'

export class Paymentpage{


    readonly demo_page: page;
    readonly NameOnCard: Locator;
    readonly CardNumber: Locator;
    readonly CVC: Locator;
    readonly ExpirationYear: Locator;
    readonly ExpirationMonth: Locator;
    readonly PayConfirmOrder: Locator;
    readonly successMessage: Locator;

    constructor(demo_page:page)
    {
            this.demo_page=demo_page; 
            this.NameOnCard=Actions.getXPATHCSSLocator("[name='name_on_card']")
            this.CardNumber=Actions.getXPATHCSSLocator("[name='card_number']");
            this.CVC=Actions.getXPATHCSSLocator("[name='cvc']")
            this.ExpirationYear=Actions.getXPATHCSSLocator("[name='expiry_year']");
            this.ExpirationMonth=Actions.getXPATHCSSLocator("[name='expiry_month']");
            this.PayConfirmOrder=Actions.getXPATHCSSLocator("#submit")
            this.successMessage = Actions.getXPATHCSSLocator("#success_message div");
    }

    async enterCardDetails()
    {
        await Actions.fill(this.NameOnCard,CardDetails.name);
        await Actions.fill(this.CardNumber,CardDetails.cardNumber);
        await Actions.fill(this.CVC,CardDetails.cvc);
        await Actions.fill(this.ExpirationYear,CardDetails.expYear);
        await Actions.fill(this.ExpirationMonth,CardDetails.expMonth);
        await Actions.clickElement(this.PayConfirmOrder);

    }


}
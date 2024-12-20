import { assert, log } from 'console';
import {page,test,expect} from '../Fixtures/CustomFixtures'
// import { request } from 'playwright';
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';
import {newUserSignupDetails} from '../Testdata/newUserSignupDetails.json'

let NewUserEmail =  newUserSignupDetails.input_Email+"_"+Date.now()+"@gmail.com";
let sProductName = "Beautiful Peacock Blue Cotton Linen Saree"
test("Test Case 24: Download Invoice after purchase order",{
      annotation:{
         type:"E2E",
         description:"Download Invoice after purchase order"
      },tag:"@Smoke"
}, async ({pages,LoginFixture,LogoutFixture,context,request}) => {
    
    //Login to app
    // await context.clearCookies();

    Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")
   

    logstep("Open url - ''")
    await Actions.navigateToURL(LoginDetails.url);

    logstep("vreify Home page displayed")
    await Assert.expectToBeVisible(pages.objhomepage.NewuserSignUp);

    logstep("click on Home");
    await Actions.clickOnLink_OnTopHeader('Home');

    logstep("click on view Product for the product to add ");
    await Actions.clickON_ViewProduct(sProductName);

    logstep("Cick on Add to cart for the above product to be in cart");
    await pages.objsearchResulsProduct.clickOnAddToCart();

    logstep("Verify message-'Your product has been added to cart'");
    await Actions.waitForElement(pages.objAllProducts.productAddedLabel);
    await Assert.expectToBeVisible(pages.objAllProducts.productAddedLabel); 

    logstep("Click on view cart");
    await Actions.clickElement(pages.objAllProducts.view_cart);

    logstep("product details on chekout page");
    await Actions.productsInCart(sProductName);

    logstep("click on 'proceed to chekout' ");
    await pages.objsearchResulsProduct.clickOnProceedToCheckout();

    logstep("Verify message-Register / Login account to proceed on checkout");
    await Assert.expectToBeVisible(pages.objsearchResulsProduct.LabelRegisterLogin); 
    
    logstep("Click on Register/Login");
    await pages.objsearchResulsProduct.clickOnregister();

    logstep("vreify Home page displayed")
    await Assert.expectToBeVisible(pages.objhomepage.NewuserSignUp);

    logstep("click on  Signup / Login");
    await Actions.clickOnLink_OnTopHeader('Signup / Login');
    
    logstep("enter username and email click on signup")
    await pages.objloginpage.newUserSignup(newUserSignupDetails.input_fisrtName,NewUserEmail)


    logstep("enter all the details for new USer click on create account")
    await pages.objSignUp.newUserSignupDetails()

    logstep(" Verify ACcount created message dispay");
    Assert.expectToBeVisible(pages.objloginpage.accountCreated);

    logstep("Click on continue to login as new user")
    await Actions.clickElement(pages.objhomepage.Continue);

    logstep("Verify logged in with new user")
    const UserName = await Actions.getTextContent(pages.objhomepage.userName)
    Assert.expectToEqual(UserName,newUserSignupDetails.input_fisrtName);

    logstep("click on Cart");
    await Actions.clickOnLink_OnTopHeader('Cart');

    logstep("click on 'proceed to chekout' ");
    await pages.objsearchResulsProduct.clickOnProceedToCheckout();

    logstep(" Verify DeliveryAddress visibe on checkput page");
    Assert.expectToBeVisible(pages.objCheckout.DeliveryAddress);

    logstep(" Verify BilingAddress visibe on checkput page");
    Assert.expectToBeVisible(pages.objCheckout.BilingAddress);

    logstep("product details on chekout page");
    await Actions.productsInCart(sProductName);

    logstep("verify delivery and biling address beore placing order same as input");
    await Assert.expectToBeVisible(pages.objCheckout.addressVerify);
    await Assert.expectToBeVisible(pages.objCheckout.bilingaddressVerify);

    logstep("Order placed message ");
    await Actions.fill(pages.objCheckout.textArea,`Ordr placing for the product - ${sProductName} on ${Date}`)

    logstep("Click on Order Place");
    await Actions.clickElement(pages.objCheckout.PlaceOrder);

    logstep("enter card details and click on pay order")
    await pages.objPayment.enterCardDetails();

    // logstep(" Verify SuccesMMessage visibe on page");
    // Assert.expectToBeVisible(pages.objPayment.successMessage);

    logstep(" Verify OrderPlaced visibe on checkout page");
    Assert.expectToBeVisible(pages.objhomepage.OrderPlaced);

    logstep("Click on Download Invoice");
    await Actions.downloadfile(pages.objhomepage.DownoadInvoice,"../DownloadFile");

    Actions.log("test Finished.."+test.info().title)









})


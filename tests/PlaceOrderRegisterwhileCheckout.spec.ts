import { assert, log } from 'console';
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';

test("PLace Order while register account",{
      annotation:{
         type:"Place order verification",
         description:"Place order while register for account"
      },tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {
    
    //Login to app
    // await context.clearCookies();
  
    logstep("Open url - ''")
    await Actions.navigateToURL(LoginDetails.url);

    logstep("vreify Home page displayed")
    await Assert.expectToBeVisible(pages.objhomepage.NewuserSignUp);

    logstep("click on Home");
    await Actions.clickOnLink_OnTopHeader('Home');

    logstep("click on view Product for the product to add ");
    await Actions.clickON_ViewProduct('Sleeveless Unicorn Patch Gown - Pink');

    logstep("Cick on Add to cart for the above product to be in cart");
    await pages.objsearchResulsProduct.clickOnAddToCart();

    logstep("Verify message-'Your product has been added to cart'");
    await Actions.waitForElement(pages.objAllProducts.productAddedLabel);
    await Assert.expectToBeVisible(pages.objAllProducts.productAddedLabel); 

    logstep("Click on view cart");
    await Actions.clickElement(pages.objAllProducts.view_cart);

    logstep("product details on chekout page");
    await Actions.productsInCart("Sleeveless Unicorn Patch Gown - Pink");

    logstep("click on 'proceed to chekout' ");
    await pages.objsearchResulsProduct.clickOnProceedToCheckout();

    logstep("Verify message-Register / Login account to proceed on checkout");
    await Assert.expectToBeVisible(pages.objsearchResulsProduct.LabelRegisterLogin); 
    
    logstep("Click on Register/Login");
    await pages.objsearchResulsProduct.clickOnregister();

})


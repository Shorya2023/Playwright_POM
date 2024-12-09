import { assert, log } from 'console';
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';


let sproduct="Pure Cotton Neon Green Tshirt";
test("Remove Item",{
      annotation:{
         type:"Remove Item ",
         description:"Add o cart and remove the same"
      },tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {
    
    //Login to app
    // await context.clearCookies();
  
    logstep("Login with valid credentials");
  //  await context.clearCookies();
    await LoginFixture(LoginDetails.username,LoginDetails.password);

    logstep("Verify that 'Logged in as username' is visible");
    //await Assert.expectToBeVisible(pages.objhomepage.userName,11000);
    await Assert.expectToBeVisible(pages.objhomepage.userName);
    const pgtitle =await  Actions.getpageTitle();
 
    logstep("Verifying page Title")
    Assert.expectToHaveTitle(pgtitle);
 
    logstep("click on Home");
    await Actions.clickOnLink_OnTopHeader('Home');

    logstep("click on view Product for the product to add ");
    await Actions.waitForElement(pages.objhomepage.featuredItem);
    await Actions.clickON_ViewProduct(sproduct);

    logstep("Cick on Add to cart for the above product to be in cart");
    await pages.objsearchResulsProduct.clickOnAddToCart();

    logstep("Verify message-'Your product has been added to cart'");
    await Actions.waitForElement(pages.objAllProducts.productAddedLabel);
    await Assert.expectToBeVisible(pages.objAllProducts.productAddedLabel); 

    logstep("Click on view cart");
    await Actions.clickElement(pages.objAllProducts.view_cart);

    logstep("check product details on chekout page");
    await Actions.addedProductInCart(sproduct);

    logstep("Remove the product from chekout page");
    await Actions.deleteProduct(sproduct);

    await page.waitForTimeout(6000);

    //page.pause();
})


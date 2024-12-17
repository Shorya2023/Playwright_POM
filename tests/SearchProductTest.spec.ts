
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Assert } from '../Util/Assert';
import { attachmentOnFailure, FAIL ,PASS,logstep} from '../Util/AllurLogs';
import { Actions } from '../Util/Actions';


test("Search product and Verify product the details",{annotation:
    {type:"UI Test case",
      description: "Search product and verify all the details displayed correctly"  
    },tag:"@Regression"
   
}, async ({  pages, LoginFixture, LogoutFixture,context }) => {
  Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")

    // logstep("Login with valid credentials");
    // await context.clearCookies();
    await LoginFixture(LoginDetails.username,LoginDetails.password);
  
    logstep("On All products page");
    const allproductPGTitle=await pages.objAllProducts.getAllproductspageTiltle();
    await Assert.expectToHaveTitle(allproductPGTitle);
  
    logstep("Click on Products");
    await Actions.clickOnLink_OnTopHeader(" Products");

    logstep("Search product from home page");
    await  pages.objhomepage.searchProducts("Summer White Top");

    logstep("Verify products details");
    Actions.waitForElement(pages.objsearchResulsProduct.Product_price);
    Assert.expectToBeVisible(  pages.objsearchResulsProduct.Product_name);
    Assert.expectToBeVisible( pages.objsearchResulsProduct.Product_image);
    Assert.expectToBeVisible( pages.objsearchResulsProduct.Product_price);

});
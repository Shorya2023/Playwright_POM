
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Assert } from '../Util/Assert';
import { attachmentOnFailure, FAIL ,PASS,logstep} from '../Util/AllurLogs';
import { Actions } from '../Util/Actions';


test("Verify product added successfully Functionality",{annotation:
    {type:"UI Test case",
      description: "Verifying product added succeefully by clicking on add to cart link functionality"  
    },tag : "@Regression"
   
}, async ({  pages, LoginFixture, LogoutFixture,context }) => {

    logstep("Login with valid credentials");
  //  await context.clearCookies();
    await LoginFixture(LoginDetails.username,LoginDetails.password);
  
    logstep("On All products page");
    const allproductPGTitle=await pages.objAllProducts.getAllproductspageTiltle();
    await Assert.expectToHaveTitle(allproductPGTitle);
  
    logstep("Click on Products");
    await Actions.clickOnLink_OnTopHeader(" Products");

    logstep("Verify All products displayed");
    const totalproducts = await Actions.countElements("//div[@class='features_items']//img");
    console.log(totalproducts);
    Assert.expectToEqual(totalproducts,34);

    logstep("click on View product");
    await Actions.clickOnView_Product("Premium Polo T-Shirts");

    logstep("Verify productname,avilabiliy,condition,brand ,qauntityon product detail page");
    await Assert.expectToBeVisible(pages.objviewProduct.Product_name,6000);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_aval,5000);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_Quantity);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_brand);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_condition);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_price);
    await Assert.expectToBeVisible(pages.objviewProduct.Product_category);
    
    logstep("click on Add to cart from product detail page");
     pages.objviewProduct.addTocart_productDetail();

    logstep("Verify message-'Your product has been added to cart'");
    await Assert.expectToBeVisible(pages.objAllProducts.productAddedLabel); 
})


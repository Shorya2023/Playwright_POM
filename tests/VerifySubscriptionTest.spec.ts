
import {sharedPage,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Assert } from '../Util/Assert';
import { attachmentOnFailure, FAIL ,PASS,logstep} from '../Util/AllurLogs';
import { Actions } from '../Util/Actions';


test("Verify product added successfully Functionality",{annotation:
    {type:"UI Test case",
      description: "Verifying product added succeefully by clicking on add to cart link functionality"  
    }
   
}, async ({  pages, LoginFixture, LogoutFixture }) => {

    logstep("Login with valid credentials");
    await LoginFixture(LoginDetails.username,LoginDetails.password);
  
    logstep("Click on HomePage");
    await Actions.clickOnLink_OnTopHeader("Home");

    logstep("Email enter for subscription");
    await Actions.scrollTOTheElement(pages.objhomepage.susbscribe_email);
    await pages.objhomepage.Susbscribe_email("abcv@gmail.com")

    logstep("Verify message-'You have been successfully subscribed!");
    await Assert.expectToBeVisible(pages.objhomepage.LabelEmail);
    sharedPage.waitForTimeout(4000);
})


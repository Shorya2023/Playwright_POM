
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Assert } from '../Util/Assert';
import { attachmentOnFailure, FAIL ,PASS,logstep} from '../Util/AllurLogs';
import { Actions } from '../Util/Actions';


test("Verify  subscription message-",{annotation:
    {type:"UI Test case",
      description: "Verify subscription message-'You have been successfully subscribed!"  
    }
   
}, async ({  pages, LoginFixture, LogoutFixture,context }) => {

  await context.clearCookies();

    logstep("Login with valid credentials");
    await LoginFixture(LoginDetails.username,LoginDetails.password);
  
    logstep("Click on Homepage");
    await Actions.clickOnLink_OnTopHeader("Home");

    logstep("Email enter for subscription");
    await Actions.scrollTOTheElement(pages.objhomepage.susbscribe_email);
    await pages.objhomepage.Susbscribe_email("abcv@gmail.com")

    logstep("Verify subscription message-'You have been successfully subscribed!");
    await Assert.expectToBeVisible(pages.objhomepage.LabelEmail);
    
  })


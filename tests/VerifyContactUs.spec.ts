import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Assert } from '../Util/Assert';
import { attachmentOnFailure, FAIL ,PASS,logstep} from '../Util/AllurLogs';
import { Actions } from '../Util/Actions';


test.skip("Verify Contact Us Functionality",{annotation:
    {type:"UI Test case",
      description: "Enter all informtion and click on sumbit and Verify the message diplayed"  
    }
   
}, async ({  pages, LoginFixture, LogoutFixture , context}) => {

  Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")
    logstep("Login with valid credentials")
    await LoginFixture(LoginDetails.username,LoginDetails.password);
    await Actions.waitForVisibLeClickable(pages.objhomepage.logout_link)

    logstep("Click on ContactUs")
    await Actions.clickOnLink_OnTopHeader("Contact us");
    await Actions.waitForVisibLeClickable(pages.objContactus.input_Subject)

    logstep("Enter Name, Email,Subject,Message , upload file  and click on submit")
    await pages.objContactus.enterContactForm();

      //TODO: reactor it
    logstep("Verify Success Message");
    await Assert.expectToBeVisible(pages.objContactus.Successmessage);    
})


import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';

test("Sign up Verification",{
      annotation:{
         type:"Sign up Verification",
         description:"Sign up Verification for new user"
      },tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {

    logstep("Open url - ''")
    await Actions.navigateToURL(LoginDetails.url);

    logstep("vreify Home page displayed")
    await Assert.expectToBeVisible(pages.objhomepage.NewuserSignUp);

    logstep("click on  Signup / Login");
    await Actions.clickOnLink_OnTopHeader('Signup / Login');

    
    logstep("enter username and email click on signup")
    await pages.objloginpage.newUserSignup();

    logstep("enter all the details for new USer click on create account")
    await pages.objSignUp.newUserSignupDetails()

    logstep(" Verify ACcount created message dispay");
    Assert.expectToBeVisible(pages.objloginpage.accountCreated);
        
});
import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';
import {newUserSignupDetails} from '../Testdata/newUserSignupDetails.json'


 test.describe.configure({mode:'serial'});
 let NewUserEmail =  newUserSignupDetails.input_Email+"_"+Date.now()+"@gmail.com";
test("Sign up Verification",{
      annotation:{
         type:"Sign up Verification",
         description:"Sign up Verification for new user"
      },tag:"@Smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {
    Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")

    logstep("Open url - ''")
    await Actions.navigateToURL(LoginDetails.url);

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
        
    await LogoutFixture();
});

test("Login with Newly Created account",{annotation:{
        type:"Login with newly username",
        description:"Login and verify newly account"
}, tag: "@Smoke"},async ({pages,LoginFixture,LogoutFixture}) => {
    Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")

    logstep("Open url - ''")
    await Actions.navigateToURL(LoginDetails.url);

    logstep("Login  with newly created account")
    await pages.objloginpage.loginToApp(NewUserEmail,newUserSignupDetails.input_password);

    logstep("Verify that 'Logged in as username' is visible");
    //await Assert.expectToBeVisible(pages.objhomepage.userName,11000);
    await Assert.expectToBeVisible(pages.objhomepage.userName);
    const pgtitle =await  Actions.getpageTitle();
 
    logstep("Verifying page Title")
    Assert.expectToHaveTitle(pgtitle);
 
    await LogoutFixture();   
    
})
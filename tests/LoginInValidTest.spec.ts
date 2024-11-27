import {test,expect,sharedPage} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import {Assert} from '../Util/Assert'
import  dotenv from "dotenv"
import { Actions } from '../Util/Actions'
import { logstep } from '../Util/AllurLogs';

 
test("Login to Application with Invalid Credentials",{
   annotation:{
       type: "Login in",
       description: "Test Case 2: Login User with INcorrect email and password"},
       tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {

    
   // await context.clearCookies();
    await LoginFixture(LoginDetails.invalid_username,LoginDetails.invalid_password);

   logstep("Verify that 'Your email or password is incorrect!' error displayed");
   Assert.expectToBeVisible(pages.objloginpage.IncorrectLoginMessage);

   //logout from application
   await LogoutFixture();   
})
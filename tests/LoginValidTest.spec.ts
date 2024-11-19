import {test,expect,sharedPage} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import {Assert} from '../Util/Assert'
import  dotenv from "dotenv"
import { Actions } from '../Util/Actions'
import { logstep } from '../Util/AllurLogs';

 
test("Login to Application",{
   annotation:{
       type: "Login in",
       description: "Test Case 2: Login User with correct email and password"},
       tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture}) => {

    
   await LoginFixture(LoginDetails.username,LoginDetails.password);

   logstep("Verify that 'Logged in as username' is visible");
   Actions.highlightElement(pages.objhomepage.userName);
   Assert.expectToBeVisible(pages.objhomepage.userName);

   const pgtitle =await  Actions.getPageTitle();

   logstep("Verifying page Title")
   Assert.expectToHaveTitle(pgtitle);

   await LogoutFixture();   
})
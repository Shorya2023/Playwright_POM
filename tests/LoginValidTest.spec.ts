import {test,expect,page} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import {Assert} from '../Util/Assert'
import  dotenv from "dotenv"
import { Actions } from '../Util/Actions'
import { logstep} from '../Util/AllurLogs';


test.use({storageState: {cookies: [], origins:[]}});
 
test("@Smoke Login to Application",{
   annotation:{
       type: "Login in",
       description: "Test Case 2: Login User with correct email and password"},
       tag:"@Smoke"
}, async ({pages,LoginFixture,LogoutFixture}) => {

   Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")
   await LoginFixture(LoginDetails.username,LoginDetails.password);

   logstep("Verify that 'Logged in as username' is visible");
   //await Assert.expectToBeVisible(pages.objhomepage.userName,11000);
   await Assert.expectToBeVisible(pages.objhomepage.userName);
   const pgtitle =await  Actions.getpageTitle();

   logstep("Verifying page Title")
   Assert.expectToHaveTitle(pgtitle);

   await LogoutFixture();   
   Actions.log("test finished.."+test.info().title)

})
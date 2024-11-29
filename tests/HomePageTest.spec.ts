import {sharedPage,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';

test("Home Page test",{
      annotation:{
         type:"HomePage verification",
         description:"Login to home Page , verifying Links displayed"
      },tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {

   //Login to app
      //  await context.clearCookies();
       await LoginFixture(LoginDetails.username,LoginDetails.password);

   logstep("Total Links on the page")
   const totallinks =  await pages.objhomepage.totalLink();
   console.log(totallinks);

   logstep("Verifying Total Links on the page")
   Assert.GreaterThanorEqual(totallinks,149);

   logstep("Display Total Links on the page")
   await pages.objhomepage.DisplayLinks()

   // logstep("Clicked on TestCase button and verify test cases new window opens up")
   // const newpageEle = Actions.newPageElement(pages.objhomepage.btnTestCase,pages.objhomepage.labelTestCases);
   // Actions.highlightElement(newpageEle);
   //Logout from app
   await LogoutFixture();
    
});

import {page,test,expect} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Actions } from '../Util/Actions';
import { logstep } from '../Util/AllurLogs';
import { Assert } from '../Util/Assert';
import logger from '../Util/Logger'


test("Home page test",{
      annotation:{
         type:"Homepage verification",
         description:"Login to home page , verifying Links displayed"
      },tag:"@Smoke"
}, async ({pages,LoginFixture,LogoutFixture,context}) => {

   Actions.log("****************test strated.."+(test.info().title).toUpperCase()+"*****************")

   await LoginFixture(LoginDetails.username,LoginDetails.password);

   logstep("Total Links on the page")
   const totallinks =  await pages.objhomepage.totalLink();

   logstep("Verifying Total Links on the page")
   Assert.GreaterThanorEqual(totallinks,149);


   logstep("Display Total Links on the page")
   await pages.objhomepage.DisplayLinks()


   // logstep("Clicked on TestCase button and verify test cases new window opens up")
   // const newpageEle = Actions.newpageElement(pages.objhomepage.btnTestCase,pages.objhomepage.labelTestCases);
   // Actions.highlightElement(newpageEle);
   //Logout from app
   await LogoutFixture();
   logger.info("Logged out from app");
   Actions.log("test strated.."+test.info().title)

    
});

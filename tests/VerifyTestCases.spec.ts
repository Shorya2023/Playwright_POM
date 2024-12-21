import {test,expect,page,context} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import  dotenv from "dotenv"
import { Actions } from '../Util/Actions'
import { logstep } from '../Util/AllurLogs'
import { Assert } from '../Util/Assert'


test("Login to Application",{
   annotation:{
       type: "Login in",
       description: "Test Case 2: verify TesT case page displayed"},
       tag:"@Smoke"
}, async ({pages,LoginFixture,LogoutFixture,browser}) => {
     
    await LoginFixture(LoginDetails.username,LoginDetails.password);
    await Actions.wait(5000)

    logstep("Verify Test cases new page opened");
        await Actions.clickElement(pages.objhomepage.btnTestCase);
        await Actions.wait(1000)
        const  locTestCase= page.locator(".title b");
        await Assert.expectToBeVisible(locTestCase);
        const  TotalTestCase= page.locator(".panel-group");
        await Assert.expectToHaveCount(TotalTestCase,27)
})
import {test,expect,sharedPage,sharedbowser} from '../Fixtures/CustomFixtures'
import {LoginDetails} from '../Testdata/Data.json'
import { Page } from '@playwright/test'
import {Assert} from '../Util/Assert'
import  dotenv from "dotenv"
import { Actions } from '../Util/Actions'
import { logstep } from '../Util/AllurLogs';


test.skip("Login to Application",{
   annotation:{
       type: "Login in",
       description: "Test Case 2: verify TesT case page displayed"},
       tag:"@smoke"
}, async ({pages,LoginFixture,LogoutFixture,browser}) => {
     
    await LoginFixture(LoginDetails.username,LoginDetails.password);
    
    logstep("Verify Test cases new page opened");
        const context = await browser.newContext()
        const page =  await context.newPage();
        const contextPromise  = context.waitForEvent('page');
        await Actions.clickElement(pages.objhomepage.btnTestCase);
        const newpage = await contextPromise;
        const val = await newpage.locator("//div[@class='panel-group']//h4");
        expect((val)).toBe(27);

})
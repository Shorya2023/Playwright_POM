import * as allure from "allure-js-commons";
import { time, timeStamp } from "console";
import { page } from "../Fixtures/CustomFixtures";



/**
 * 
 * @param stepName With this setup, 
 * calling logStep('Your custom message') 
 * will add a step in Allure with the provided message,
 *  without requiring an async function
 */
export async function logstep(stepName: string)
{
   await allure.step("****************"+stepName+"****************", ()=>{});
}

export async function  PASS(stepName: string)
{
    await allure.logStep(stepName,allure.Status.PASSED)
}

export async function FAIL(stepName: string)
{
    await allure.logStep(stepName,allure.Status.FAILED)
}


export async function  SKIP(stepName: string)
{
    await allure.logStep(stepName,allure.Status.SKIPPED)
}


export async function attachmentOnFailure(ScreenShotName:string)
{
    const screenShotPath="X:/Playwright_POM/Screenshots/"+ScreenShotName+"_"+".png";
    await page.screenshot({path:screenShotPath});
    await allure.attachmentPath('Screenshot',screenShotPath,{
        contentType: 'image/png',
      });
}


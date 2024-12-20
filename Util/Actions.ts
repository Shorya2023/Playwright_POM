// import { expect, page} from '@playwright/test';
import { test,page, context, Locator,Browser, expect} from '../Fixtures/CustomFixtures'
import { FAIL, logstep, PASS } from './AllurLogs';
import { error, log } from 'console';
import { Assert } from './Assert';
import { TIMEOUT } from 'dns/promises';
import fs from 'fs'
import logger from '../Util/Logger';


export class Actions {


  public static getXPATHCSSLocator(xpath_css: string): Locator {
    try {
      const locator = page.locator(xpath_css);
       logger.info(`Locator found with XPath: ${xpath_css}`);
      return locator;
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      FAIL(`Error finding locator with XPath: ${xpath_css}`);
      throw error;
    }
  }

  public static getCustomLocatorByText(sText: string):Locator
  {
        let locator:Locator;
     try{ 
          const regexp = new RegExp(`^${sText}`,'i')
          const locator =page.getByText(regexp,{exact:true});
          return locator;
        }
        catch(error)
       {
            logger.error(`Test failed: ${error.message}`);
          }

  }

  
  public static async getLocatorHasText(element: string,stext: string):Locator
  {
        let locator:Locator;
     try{ 

        const locator= await page.locator(element,{hasText: stext});
        return locator;
        }
        catch(error)
       {
            logger.error(`Test failed: ${error.message}`);  
            throw error;
        }

  }

  public static  getRoleLocator(options: {
    role: "button" | "checkbox" | "combobox" | "link" | "textbox" |
    "list" | "radio" | "radiogroup" | "searchbox" | "table" | "tooltip",
    name: string,
    exact?: boolean,
    nth?: number,
    has?: Locator,
    hasText?: string
  }): Locator {
    try {
      //
      let locatorvalue = page.getByRole(options.role,
        {
          name: options.name,
          exact: options.exact,
          has: options.has,
          hasText: options.hasText

        });
      if (options.nth !== undefined) {
        locatorvalue = locatorvalue.nth(options.nth);
      }

      // Log success and return locator return
      return locatorvalue;
    }
    catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error
    }


  }



  public static getCustomLocator(a: string, b: string): Locator {
    return page.locator(a);

  }


  public static async highlightandclickElement(locator: Locator) {
    try {

      await locator.highlight();
      await locator.click();
       logger.info(locator + ' highlisght and Element clicked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async hoverAndClick(locator: Locator) {
    try {

      await locator.hover();
      await locator.click();
       logger.info(locator + ' hover and Element clicked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async clickElement(locator: Locator) {
    try {

      await locator.click();
       logger.info(locator + ' hover and Element clicked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async pressEnter(locator: Locator) {
    try {

      await locator.highlight();
      await locator.press('Enter');
       logger.info(locator + 'Element clicked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }

  // public static async newpageElement(locatorCurrentpage: Locator, locatorOnNewpage: Locator):
  //   Locator {
  //   const newpagePromise = sharedcontext.waitForEvent('page');
  //   await Actions.clickElement(locatorCurrentpage);
  //   const newpage = await newpagePromise;
  //   const Elemenet = newpage.locator()
  //   return Elemenet;
  // }


  public static async highlightElement(locator: Locator) {
    try {
      await locator.highlight();
       logger.info('Element highlight successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }
  
  public static async SelectFromDropDown(locator: Locator, value:any) {
    try {
        await locator.selectOption(value)
         logger.info('Element highlight successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async acceptDialogs() {
    try { // Listen for the dialog event and automatically accept it 
      page.on('dialog', async dialog => {
        await dialog.accept();
      });
       logger.info('Dialog event listener set up to accept all dialogs.');
    }
    catch (error) {
    logger.error(`Test failed: ${error.message}`);
    }
  }

  public static async getpageTitle() {
    try {
      return (await page.title());
    }
    catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async wait(ms: number) {
    try {
      await page.waitForTimeout(ms);
    }
    catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }

  }

  public static async fill(locator: Locator, text: any) {
    try {
      await locator.fill(text);
       logger.info('Text Entered successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }

  public static async uploadFile(locator: Locator, filepath: string) {
    try {
        await locator.setInputFiles(filepath);
        await Actions.wait(2000);
        logger.info('File Uploaded successfully:');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`); 
         throw error;

    }
  }


  public static async KeysOnElement(locator: Locator, skeys:string){
    try {
        await locator.press(skeys);
        logger.info(`keybod action ${skeys} performed`);
    } catch (error) {
    logger.error(`keybod action ${skeys} failed: ${error.message}`); 
         throw error;

    }
  }


  public static async clearText(locator: Locator) {
    try {
      await locator.clear();
       logger.info('Text cleared successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async selectOption(locator: Locator, value: any) {
    try {
      await locator.selectOption(value);
       logger.info('Option selected successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async waitForVisibility(locator: Locator, timeout = 5000) {
    try {
      await locator.waitFor({ state: 'visible', timeout });
       logger.info('Element is visible.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }


  public static async navigateToURL(url: string) {
    try {
      await page.goto(url);
      await page.setViewportSize({ width: 1400, height: 1100 })
       logger.info('Navigated to URL successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }

  public static async getTextContent(locator: Locator) {
    try {
      const text = await locator.textContent();
       logger.info('Text content retrieved:', text);
      return text;
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }


  public static async doubleClickElement(locator: Locator) {
    try {
      await locator.dblclick();
       logger.info('Element double-clicked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async setCheckboxChecked(locator: Locator, checked = true) {
    try {
      await locator.setChecked(checked);
       logger.info(`Checkbox ${checked ? 'checked' : 'unchecked'} successfully.`);
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }



  public static async tapElement(locator: Locator) {
    try {
      await locator.tap();
       logger.info('Element tapped successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;

    }
  }

  public static async uncheckCheckbox(locator: Locator) {
    try {
      await locator.uncheck();
       logger.info('Checkbox unchecked successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      FAIL("Error while checking");
      throw error;

    }
  }

  public static async hoverElement(locator: Locator) {
    try {
      await locator.hover();
       logger.info('Element hovered successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      FAIL("Error while hover to element");
      throw error;

    }
  }

  public static async dragElementTo(sourcelocator: Locator, targetLocator: Locator) {
    try {
      await sourcelocator.dragTo(targetLocator);
       logger.info('Element dragged to target successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async screenshotElement(locator: Locator, path: string) {
    try {
      await locator.screenshot({ path });
       logger.info('Screenshot taken successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);       FAIL("Error while taking screnshot");
      throw error;
    }
  }


  public static async selectTextInElement(locator: Locator) {
    try {
      await locator.selectText();
       logger.info('Text selected successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async scrollTOTheElement(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  
  public static async scrollToTheElementAndClick(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
      await locator.click();
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);   
       throw error;
    }
  }


  public static async scrollIntoViewIfNeeded(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
       logger.info('Element scrolled into view successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }


  public static async focusElement(locator: Locator) {
    try {
      await locator.focus();
       logger.info('Element focused successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async pressKey(locator: Locator, key: any) {
    try {
      await locator.press(key);
       logger.info(`Key '${key}' pressed successfully.`);
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async setInputFiles(locator: Locator, filePaths: any) {
    try {
      await locator.setInputFiles(filePaths);
       logger.info('Files set successfully.');
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }

  public static async pressKeysSequentially(locator: Locator, keys: any) {
    try {
      for (const key of keys) {
        await locator.press(key);
      }
       logger.info(`Keys '${keys.join(', ')}' pressed successfully.`);
    } catch (error) {
    logger.error(`Test failed: ${error.message}`);      throw error;
    }
  }


  //du to flaky in nature
  // public static async waitForpageLoad()
  // {
  //     await page.waitForLoadState('networkidle',{timeout:50000});
  // }

  public static async getArrayOfElement(locatorType: string) {
    try {
      const arrayElements = await page.$$(locatorType);
      if (arrayElements.length === 0) {
        throw error("No elements found");
      }
      return arrayElements;
    }
    catch (error) {
      console.error("Error in getArrayOfElement", error)
      throw error;

    }
    //     return locator;
  }


  public static async countElements(locatorType: string) {
    try {
      const ele = await page.locator(locatorType);
      return ele.count();
    }
    catch (error) {
    logger.error(`Test failed: ${error.message}`);   
       throw error;
    }
  }



  public static async LinkWithTextinHeader(link: string) {
    const totalLinksinHeader = await Actions.getArrayOfElement("//div[@class='shop-menu pull-right']//a");
    for (let ln of totalLinksinHeader) {
      const linksonpage = await ln.textContent();
       logger.info((linksonpage));
      if (linksonpage == link) {
        PASS(linksonpage + "Verified links exists on homepage");
        logstep(linksonpage + "Verified links exists on homepage")
        return linksonpage;
        break;
      }

    }
  }


    public static async CLickAndReturnNewpage(slocator:Locator)
    {    
           const context = await sharedbowser.newContext();
           const page = (await context).newpage();

        const [newpage] = await Promise.all(
          [  
               context.waitForEvent('page'),
               Actions.clickElement(slocator),
          ]);

          return newpage;
  }

  public static async clickOnLink_OnTopHeader(link: string) {
    const totalLinksinHeader = await Actions.getArrayOfElement("//div[@class='shop-menu pull-right']//a");
    for (let ln of totalLinksinHeader) {
      let stextContent = await (ln.textContent());
      const textonAPP = stextContent.trim();
      if (textonAPP == link) {
         logger.info(textonAPP, "-------  ", link, "both ae same");
        await ln.click();
         logger.info("click on header--" + stextContent);
        break;
      }
      else {
        log(textonAPP, "  ", link, "are NOT SAME")
      }
    }
  }


  public static async clickOnAddToCart_Product(sproductName: string) {
    try {
      const productlocateElement = Actions.getXPATHCSSLocator(`//div[@class='productinfo text-center']//p[text()="${sproductName}"]//following-sibling::a`);
      productlocateElement.click();
      PASS(sproductName + "Added to cart Clicked Successfully");
    }

    catch (error) {
       logger.info(sproductName + "-Element add to cart not clicked ERROR:" + error);

    }
  }


public static async clickON_ViewProduct(sProductName: string)
{
          try{
                const ViewProduct = Actions.getXPATHCSSLocator(`//div[@class='features_items']//div[@class='productinfo text-center']//p[text()='${sProductName }']//following::ul[1]//li[1]//a`)
                Actions.waitForElement(ViewProduct,20000);        
                //click on view Product for  specific sproduct name
                    await ViewProduct.click();
              }
              catch(error)
              {
                logger.error("view product not clicked : Error:"+ error)
              }
}
  
  
  public static async clickOnView_Product(sproductName: string) {
    try {
      const productlocateElement = Actions.getXPATHCSSLocator(`//div[@class='productinfo text-center']//p[text()="${sproductName}"]//following::ul[1]`);
      productlocateElement.click();
      PASS(sproductName + "Clicked  view product Successfully");
    }

    catch (error) {
       logger.info(sproductName + "-Element add to cart not clicked ERROR:" + error);
    }
  }

  public static async waitForElement(selector:any, timeout = 5000) {
      try {
            //  page.waitForSelector(selector,timeout);
            await selector.waitFor();
             logger.info(`Element with selector "${selector}" is within ${timeout}ms.`);
          } 
            catch (error) {
            logger.error(`Test failed: ${error.message}`);              FAIL("'Error: Element is not visible.'");
            throw error;
      }
  }

  public static async waitForVisibLeClickable(selector:any, timeout = 5000) {
    try {
          //  page.waitForSelector(selector,timeout);
        if ((await page.locator(selector).isEnabled) && await page.locator(selector).isVisible)
            logger.info(`Element with selector "${selector}" is within ${timeout}ms.`);
        } 
          catch (error) {
          logger.error(`Test failed: ${error.message}`);  
          throw error;
    }
}

  public static getRandomInt(min: number, max:number)
  {
     return Math.floor(Math.random() * (max - min + 1));
  }


  public static async downloadfile(locator:Locator, filpath:string)
  {
          const downlaodPromise =  page.waitForEvent('download');
          await Actions.clickElement(locator);
          const downloadfile =  downlaodPromise;

          //save download file
           (await downloadfile).saveAs(filpath+ (await downloadfile).suggestedFilename());
          //verify the file name
          expect(fs.existsSync(filpath)).toBe(true);
  }

public static async deleteProduct(sProductName:string)
          {
            await page.locator("//table//thead//tr[1]").waitFor();
            // const headers = await page.locator("//table//thead//tr//td");
             const rows = await page.locator('tbody tr');
              logger.info("Total rows are in the cart:"+await rows.count());       
               for (let a=0; a<await rows.count();a++)
               {
                    const productsInCart =  await rows.nth(a).locator('td h4').first().textContent();
                     logger.info("prod in cart is --",productsInCart);
                    
                    if ((productsInCart)?.trim()===sProductName)
                    {
                       await rows.nth(a).locator('td:last-child a').last().click();
                      
                        logger.info(`${sProductName} deleted from cart`);
                       
                    }
               }

  }    

      public static async log(message:any)
      {
          await logger.info(message)
      }

public static async addedProductInCart(sProductName: string)
    {

        await page.locator("//table//thead//tr[1]").waitFor();
       // const headers = await page.locator("//table//thead//tr//td");
        const rows = await page.locator('tbody tr');
         logger.info("Total rows are:"+await rows.count());       
        const totalRows = await rows.count()
        const matchedRows= rows.filter({
              has:page.locator('td'),
              hasText: sProductName
        })
       const  NumberofRowsProducts = await matchedRows.count();
        if (NumberofRowsProducts>0)
           {
             logger.info(`poduct ${sProductName} exists in the  cart`);    
            }
            else
            {
              console.error(`poduct ${sProductName} NOT exists in the  cart`);    
              throw error;

            }


     }


     public static async ErrorDetails()
     {
        console.error(`Test failed: ${test.info().title}`);
        console.error(`Error: ${error.name}`); 
        console.error(`Test file: ${test.info().file}`); 
        console.error(`Error occurred at line: ${test.info().line}`);
     }

  public static async productsInCart(sProductInCart :string)
  {
        const headers =  page.locator("//table//thead//tr[1]//td");
        const rows = page.locator("//table//tbody/tr//td");

      //  const allRowsvalue = await rows.allTextContents();
        const  allColsvalue= await headers.allTextContents();
         Assert.includesSubstring(allColsvalue,"Item");
         Assert.includesSubstring(allColsvalue,"Description");
          Assert.includesSubstring(allColsvalue,"Price");
        Assert.includesSubstring(allColsvalue,"Quantity");
        Assert.includesSubstring(allColsvalue,"Total");

        const matchedRows=await rows.filter({
              has:page.locator('td'),
              hasText: sProductInCart
        })

       const  matchedRowsCount = matchedRows.count();
       for(let i=0;i<=matchedRowsCount;i++)
       {
             logger.info(matchedRows.nth(i).textContent());
          //  Assert.expectToEqual(matchedRows.nth(i).textContent(),sProductInCart)           
       }
                      
  }


}   

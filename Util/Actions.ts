import { expect, Page} from '@playwright/test';
import { sharedPage, sharedcontext, Locator,sharedbowser} from '../Fixtures/CustomFixtures'
import { FAIL, logstep, PASS } from './AllurLogs';
import { error, log } from 'console';
import { Assert } from './Assert';
import { TIMEOUT } from 'dns/promises';



export class Actions {


  public static getXPATHCSSLocator(xpath_css: string): Locator {
    try {
      const locator = sharedPage.locator(xpath_css);
      console.log(`Locator found with XPath: ${xpath_css}`);
      return locator;
    } catch (error) {
      console.error(`Error finding locator with XPath: ${xpath_css}`, error);
      FAIL(`Error finding locator with XPath: ${xpath_css}`);
      throw error;
    }
  }

  public static getCustomLocatorByText(sText: string):Locator
  {
        let locator:Locator;
     try{ 
          const regexp = new RegExp(`^${sText}`,'i')
          const locator =sharedPage.getByText(regexp,{exact:true});
          return locator;
        }
        catch(error)
       {
        console.error('Error occurred getBYText locator:'+error);
      }

  }

  
  public static async getLocatorHasText(element: string,stext: string):Locator
  {
        let locator:Locator;
     try{ 

        const locator= await sharedPage.locator(element,{hasText: stext});
        return locator;
        }
        catch(error)
       {
        console.error('Error occurred getLocatorHasText locator:'+error);
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
      let locatorvalue = sharedPage.getByRole(options.role,
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
      console.log("Error while locate element using getByRole:", error);
      throw error
    }


  }



  public static getCustomLocator(a: string, b: string): Locator {
    return sharedPage.locator(a);

  }


  public static async highlightandclickElement(locator: Locator) {
    try {

      await locator.highlight();
      await locator.click();
      console.log(locator + ' highlisght and Element clicked successfully.');
    } catch (error) {
      console.error('Error clicking element:', locator,error);
      throw error;

    }
  }


  public static async hoverAndClick(locator: Locator) {
    try {

      await locator.hover();
      await locator.click();
      console.log(locator + ' hover and Element clicked successfully.');
    } catch (error) {
      console.error('Error clicking element:', locator,error);
      throw error;

    }
  }


  public static async clickElement(locator: Locator) {
    try {

      await locator.click();
      console.log(locator + ' hover and Element clicked successfully.');
    } catch (error) {
      console.error('Error clicking element:', locator,error);
      throw error;

    }
  }


  public static async pressEnter(locator: Locator) {
    try {

      await locator.highlight();
      await locator.press('Enter');
      console.log(locator + 'Element clicked successfully.');
    } catch (error) {
      console.error('Error clicking element:', error);
      throw error;

    }
  }

  // public static async newPageElement(locatorCurrentPage: Locator, locatorOnNewPage: Locator):
  //   Locator {
  //   const newPagePromise = sharedcontext.waitForEvent('Page');
  //   await Actions.clickElement(locatorCurrentPage);
  //   const newPage = await newPagePromise;
  //   const Elemenet = newPage.locator()
  //   return Elemenet;
  // }


  public static async highlightElement(locator: Locator) {
    try {
      await locator.highlight();
      console.log('Element highlight successfully.');
    } catch (error) {
      console.error('Error highlight element:', error);
      throw error;

    }
  }
  
  public static async SelectFromDropDown(locator: Locator, value:any) {
    try {
        await locator.selectOption(value)
        console.log('Element highlight successfully.');
    } catch (error) {
      console.error('Error highlight element:', error);
      throw error;

    }
  }


  public static async acceptDialogs() {
    try { // Listen for the dialog event and automatically accept it 
      sharedPage.on('dialog', async dialog => {
        await dialog.accept();
      });
      console.log('Dialog event listener set up to accept all dialogs.');
    }
    catch (error) {
      console.error('Error setting up dialog event listener:', error);

    }
  }

  public static async getPageTitle() {
    try {
      return (await sharedPage.title());
    }
    catch (error) {
      console.log("Error in pagetitle: ", error);
      throw error;

    }
  }


  public static async wait(ms: number) {
    try {
      await sharedPage.waitForTimeout(ms);
    }
    catch (error) {
      console.log("Error in waitforTimeOut", error);
      throw error;
    }

  }

  public static async fill(locator: Locator, text: any) {
    try {
      await locator.fill(text);
      console.log('Text Entered successfully.');
    } catch (error) {
      console.error('Error in Entering text:', error);
      throw error;

    }
  }

  public static async uploadFile(locator: Locator, path: any) {
    try {
      await locator.setInputFiles(path);
      console.log('File Uploaded successfully:');
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;

    }
  }

  public static async clearText(locator: Locator) {
    try {
      await locator.clear();
      console.log('Text cleared successfully.');
    } catch (error) {
      console.error('Error clearing text:', error);
      throw error;

    }
  }


  public static async selectOption(locator: Locator, value: any) {
    try {
      await locator.selectOption(value);
      console.log('Option selected successfully.');
    } catch (error) {
      console.error('Error selecting option:', error);
      throw error;

    }
  }


  public static async waitForVisibility(locator: Locator, timeout = 5000) {
    try {
      await locator.waitFor({ state: 'visible', timeout });
      console.log('Element is visible.');
    } catch (error) {
      console.error('Error waiting for visibility:', error);
      throw error;

    }
  }


  public static async navigateToURL(url: string) {
    try {
      await sharedPage.goto(url);
      await sharedPage.setViewportSize({ width: 1400, height: 1100 })
      console.log('Navigated to URL successfully.');
    } catch (error) {
      console.error('Error navigating to URL:', error);
      throw error;

    }
  }

  public static async getTextContent(locator: Locator) {
    try {
      const text = await locator.textContent();
      console.log('Text content retrieved:', text);
      return text;
    } catch (error) {
      console.error('Error getting text content:', error);
      throw error;
    }
  }


  public static async doubleClickElement(locator: Locator) {
    try {
      await locator.dblclick();
      console.log('Element double-clicked successfully.');
    } catch (error) {
      console.error('Error double-clicking element:', error);
      throw error;
    }
  }

  public static async setCheckboxChecked(locator: Locator, checked = true) {
    try {
      await locator.setChecked(checked);
      console.log(`Checkbox ${checked ? 'checked' : 'unchecked'} successfully.`);
    } catch (error) {
      console.error('Error setting checkbox checked state:', error);
      throw error;
    }
  }



  public static async tapElement(locator: Locator) {
    try {
      await locator.tap();
      console.log('Element tapped successfully.');
    } catch (error) {
      console.error('Error tapping element:', error);
      throw error;

    }
  }

  public static async uncheckCheckbox(locator: Locator) {
    try {
      await locator.uncheck();
      console.log('Checkbox unchecked successfully.');
    } catch (error) {
      console.error('Error unchecking checkbox:', error);
      FAIL("Error while checking");
      throw error;

    }
  }

  public static async hoverElement(locator: Locator) {
    try {
      await locator.hover();
      console.log('Element hovered successfully.');
    } catch (error) {
      console.error('Error hovering over element:', error);
      FAIL("Error while hover to element");
      throw error;

    }
  }

  public static async dragElementTo(sourcelocator: Locator, targetLocator: Locator) {
    try {
      await sourcelocator.dragTo(targetLocator);
      console.log('Element dragged to target successfully.');
    } catch (error) {
      console.error('Error dragging element to target:', error);
      throw error;
    }
  }

  public static async screenshotElement(locator: Locator, path: string) {
    try {
      await locator.screenshot({ path });
      console.log('Screenshot taken successfully.');
    } catch (error) {
      console.error('Error taking screenshot:', error);
       FAIL("Error while taking screnshot");
      throw error;
    }
  }


  public static async selectTextInElement(locator: Locator) {
    try {
      await locator.selectText();
      console.log('Text selected successfully.');
    } catch (error) {
      console.error('Error selecting text:', error);
      throw error;
    }
  }

  public static async scrollTOTheElement(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
    } catch (error) {
      console.error('Error scrolling into element :', error);
      throw error;
    }
  }


  public static async scrollIntoViewIfNeeded(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
      console.log('Element scrolled into view successfully.');
    } catch (error) {
      console.error('Error scrolling element into view:', error);
      throw error;
    }
  }


  public static async focusElement(locator: Locator) {
    try {
      await locator.focus();
      console.log('Element focused successfully.');
    } catch (error) {
      console.error('Error focusing on element:', error);
      throw error;
    }
  }

  public static async pressKey(locator: Locator, key: any) {
    try {
      await locator.press(key);
      console.log(`Key '${key}' pressed successfully.`);
    } catch (error) {
      console.error(`Error pressing key '${key}':`, error);
      throw error;
    }
  }

  public static async setInputFiles(locator: Locator, filePaths: any) {
    try {
      await locator.setInputFiles(filePaths);
      console.log('Files set successfully.');
    } catch (error) {
      console.error('Error setting input files:', error);
      throw error;
    }
  }

  public static async pressKeysSequentially(locator: Locator, keys: any) {
    try {
      for (const key of keys) {
        await locator.press(key);
      }
      console.log(`Keys '${keys.join(', ')}' pressed successfully.`);
    } catch (error) {
      console.error('Error pressing keys sequentially:', error);
      throw error;
    }
  }


  //du to flaky in nature
  // public static async waitForPageLoad()
  // {
  //     await sharedPage.waitForLoadState('networkidle',{timeout:50000});
  // }

  public static async getArrayOfElement(locatorType: string) {
    try {
      const arrayElements = await sharedPage.$$(locatorType);
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
      const ele = await sharedPage.locator(locatorType);
      return ele.count();
    }
    catch (error) {
      console.error("Error in getArrayOfElement", error)
      throw error;
    }
  }



  public static async LinkWithTextinHeader(link: string) {
    const totalLinksinHeader = await Actions.getArrayOfElement("//div[@class='shop-menu pull-right']//a");
    for (let ln of totalLinksinHeader) {
      const linksonPage = await ln.textContent();
      console.log((linksonPage));
      if (linksonPage == link) {
        PASS(linksonPage + "Verified links exists on homepage");
        logstep(linksonPage + "Verified links exists on homepage")
        return linksonPage;
        break;
      }

    }
  }


    public static async CLickAndReturnNewPage(slocator:Locator)
    {    
           const context = await sharedbowser.newContext();
           const page = (await context).newPage();

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
        console.log(textonAPP, "-------  ", link, "both ae same");
        await ln.click();
        console.log("click on header--" + stextContent);
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
      console.log(sproductName + "-Element add to cart not clicked ERROR:" + error);

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
                console.error("view product not clicked : Error:"+ error)
              }
}
  
  
  public static async clickOnView_Product(sproductName: string) {
    try {
      const productlocateElement = Actions.getXPATHCSSLocator(`//div[@class='productinfo text-center']//p[text()="${sproductName}"]//following::ul[1]`);
      productlocateElement.click();
      PASS(sproductName + "Clicked  view product Successfully");
    }

    catch (error) {
      console.log(sproductName + "-Element add to cart not clicked ERROR:" + error);
    }
  }

  public static async waitForElement(selector:any, timeout = 5000) {
      try {
            //  sharedPage.waitForSelector(selector,timeout);
            await selector.waitFor();
            console.log(`Element with selector "${selector}" is within ${timeout}ms.`);
          } 
            catch (error) {
            console.error(selector , 'Error: Element is not visible.', error);
            FAIL("'Error: Element is not visible.'");
            throw error;
      }
  }

  public static getRandomInt(min: number, max:number)
  {
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }

public static async deleteProduct(sProductName:string)
          {
            await sharedPage.locator("//table//thead//tr[1]").waitFor();
            // const headers = await sharedPage.locator("//table//thead//tr//td");
             const rows = await sharedPage.locator('tbody tr');
             console.log("Total rows are in the cart:"+await rows.count());       
               for (let a=0; a<await rows.count();a++)
               {
                    const productsInCart =  await rows.nth(a).locator('td h4').first().textContent();
                    console.log("prod in cart is --",productsInCart);
                    
                    if ((productsInCart)?.trim()===sProductName)
                    {
                       await rows.nth(a).locator('td:last-child a').last().click();
                      
                       console.log(`${sProductName} deleted from cart`);
                       
                    }
               }

  }    

public static async addedProductInCart(sProductName: string)
    {

        await sharedPage.locator("//table//thead//tr[1]").waitFor();
       // const headers = await sharedPage.locator("//table//thead//tr//td");
        const rows = await sharedPage.locator('tbody tr');
        console.log("Total rows are:"+await rows.count());       
        const totalRows = await rows.count()
        const matchedRows= rows.filter({
              has:sharedPage.locator('td'),
              hasText: sProductName
        })
       const  NumberofRowsProducts = await matchedRows.count();
        if (NumberofRowsProducts>0)
           {
            console.log(`poduct ${sProductName} exists in the  cart`);    
            }
            else
            {
              console.error(`poduct ${sProductName} NOT exists in the  cart`);    

            }


     }


  public static async productsInCart(sProductInCart :string)
  {
        const headers =  sharedPage.locator("//table//thead//tr[1]//td");
        const rows = sharedPage.locator("//table//tbody/tr//td");

      //  const allRowsvalue = await rows.allTextContents();
        const  allColsvalue= await headers.allTextContents();
         Assert.includesSubstring(allColsvalue,"Item");
         Assert.includesSubstring(allColsvalue,"Description");
          Assert.includesSubstring(allColsvalue,"Price");
        Assert.includesSubstring(allColsvalue,"Quantity");
        Assert.includesSubstring(allColsvalue,"Total");

        const matchedRows=await rows.filter({
              has:sharedPage.locator('td'),
              hasText: sProductInCart
        })

       const  matchedRowsCount = matchedRows.count();
       for(let i=0;i<=matchedRowsCount;i++)
       {
            console.log(matchedRows.nth(i).textContent());
          //  Assert.expectToEqual(matchedRows.nth(i).textContent(),sProductInCart)           
       }
                      
  }


}   

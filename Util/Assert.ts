import { Locator } from '@playwright/test';
import {expect, sharedPage,test} from '../Fixtures/CustomFixtures'
import * as allure from "allure-js-commons";
import { attachmentOnFailure, FAIL ,PASS,logstep} from './AllurLogs';
export class Assert {


    // Utility for toBeChecked
    public static async expectToBeChecked(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeChecked({ timeout });
        console.log(locator,'Element is checked.');
      } catch (error) {
        FAIL("Error: Element is not checked");
        throw error;
      }
    }
  
    // Utility for toBeDisabled
    public static async expectToBeDisabled(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeDisabled({ timeout });
        console.log(locator ,'Element is disabled.');
      } catch (error) {
        console.error(locator , 'Error: Element is not disabled.', error);
        FAIL("Error: Element is not Disabled");
        throw error;
      }
    }
  
    // Utility for toBeEditable
    public static async expectToBeEditable(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeEditable({ timeout });
        console.log(locator ,'Element is editable.');
      } catch (error) {
        console.error(locator , 'Error: Element is not editable.', error);
      }
    }
  
    // Utility for toBeFocused
    public static async expectToBeFocused(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeFocused({ timeout });
        console.log(locator ,'Element is focused.');
      } catch (error) {
        console.error(locator , 'Error: Element is not focused.', error);
      }
    }
  
    // Utility for toBeHidden
    public static async expectToBeHidden(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeHidden({ timeout });
        console.log(locator ,'Element is hidden.');
      } catch (error) {
        console.error(locator , 'Error: Element is not hidden.', error);
      }
    }
  
    // Utility for toBeInViewport
    public static async expectToBeInViewport(locator: Locator, timeout = 5000) {
      try {
        await expect(locator).toBeInViewport({ timeout });
        console.log(locator ,'Element is in the viewport.');
      } catch (error) {
        console.error(locator , 'Error: Element is not in the viewport.', error);
      }
    }
  
    // Utility for toBeVisible
    public static async expectToBeVisible(locator: Locator, timeout = 5000) {
      try {
            await expect(locator).toBeVisible({ timeout });
            console.log(locator ,'Element is visible.');
            PASS("Element is visible.'");
          } 
          catch (error) {
            console.error(locator , 'Error: Element is not visible.', error);
            FAIL("'Error: Element is not visible.'");
            throw error;
      }
    }
  
    // Utility for toContainText
    public static async expectToContainText(locator: Locator, text: any, timeout = 5000) {
      try {
        await expect(locator).toContainText(text, { timeout });
        console.log(locator ,'Element contains the text.');
        PASS("Element is visisble ")
      } catch (error) {
        console.error(locator , 'Error: Element does not contain the text.', error);
        FAIL("Error: Element does not contain the text");
        throw error;
      }
    }
  
    // Utility for toHaveCount
    public static async expectToHaveCount(locator: Locator, count: number, timeout = 5000) {
      try {
        await expect(locator).toHaveCount(count, { timeout });
        console.log(locator ,'Element has the correct count.');
      } catch (error) {
        console.error(locator , 'Error: Element does not have the correct count.', error);
      }
    }
  
    // Utility for toHaveText
    public static async expectToHaveText(locator: Locator, text: any, timeout = 5000) {
      try {
        await expect(locator).toHaveText(text, { timeout });
        console.log(locator ,'Element has the correct text.');
      } catch (error) {
        console.error(locator , 'Error: Element does not have the correct text.', error);
        FAIL("Error: Element does not have the correct text ");
        throw error;

      }
    }
  
    // Utility for toHaveValue
    public static async expectToHaveValue(locator: Locator, value: any, timeout = 5000) {
      try {
        await expect(locator).toHaveValue(value, { timeout });
        console.log(locator ,'Element has the correct value.');
      } catch (error) {
        console.error(locator , 'Error: Element does not have the correct value.', error);
      }
    }
  
    // Utility for toHaveTitle
    public static async expectToHaveTitle( title: string, timeout = 5000) {
      try {
            await expect(sharedPage).toHaveTitle(title, { timeout });
            console.log('Page has the correct title.->',title);
      } 
      catch (error) {
           console.error( 'Error: Page does not have the correct title.', error);
           FAIL("Error: Page does not have the correct title.")
           throw error;
      }
    }
  
    // Utility for toHaveURL
    public static async expectToHaveURL( url: string, timeout = 5000) {
      try {
        await expect(sharedPage).toHaveURL(url, { timeout });
        console.log('Page has the correct URL.');
      } catch (error) {
        FAIL("Error: Incorrect URL");
        throw error;
      }
    }
  
    // Utility for toContain (String)
    public static expectStringToContain(value: any, substring: string) {
      try {
        expect(value).toContain(substring);
        console.log('String' ,value,'contains the substring.',substring);
        PASS('String exist');
      } catch (error) {
        console.error('Error: String does not contain the substring.', error);
        FAIL('Error: String does not contain the substring.');
        throw error;
      }
    }
  
    // Utility for toContain (Array or Set)
    public static expectArrayToContain(array: object, element: any) {
      try {
        expect(array).toContain(element);
        console.log('Array contains the element.');
      } catch (error) {
        console.error('Error: Array does not contain the element.', error);
      }
    }
  
    // Utility for toContainEqual
    public static expectArrayToContainEqual(array: object, element: any) {
      try {
        expect(array).toContainEqual(element);
        console.log('Array contains an equal element.');
      } catch (error) {
        console.error( 'Error: Array does not contain an equal element.', error);
      }
    }
  
    // Utility for toEqual
    public static expectToEqual(value1: any, value2: any) {
      try {
          expect(value1).toEqual(value2);
          console.log(value1, " and ",value2,'are equal.');
      } catch (error) {
          attachmentOnFailure("testInfo");
          console.error(value1, "and",value2,'Error: Values are not equal.', error);
          FAIL("verification of two values are deeply equal.-FAILED"+value1+ "-Not Matching to-"+ value2);
          attachmentOnFailure("testInfo");
          throw error;
      }
    }
  }
  
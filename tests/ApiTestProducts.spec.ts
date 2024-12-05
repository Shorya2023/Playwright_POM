import {test,request, expect} from '@playwright/test'

    let url = "https://automationexercise.com/api/brandsList";
    let baseURL;

    test.beforeAll("Before all set up base url", async({})=>{
          baseURL  = await request.newContext({baseURL:"https://automationexercise.com"})
    })

test("API testing to retrive all products",async({request})=>{
           const Productdata = await request.get(url);
            console.log(await Productdata.json());
})

test("API test to retrie all brands", async({})=>{
         const brandlists = await baseURL.get("api/brandsList");
         console.log(await brandlists.json());
         expect(brandlists.status()).toBe(200);
         expect(brandlists.ok).toBeTruthy();
     
})

test("Poduct lists", async({})=>{
    const brandlists = await baseURL.get("api/productsList");
    console.log(await brandlists.json());
    expect(brandlists.status()).toBe(200);
    expect(brandlists.ok).toBeTruthy();
});


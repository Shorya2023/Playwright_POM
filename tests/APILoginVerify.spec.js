import {test,request, expect} from '@playwright/test'

let baseURL;
const requestdata ={
   // csrfmiddlewaretoken: "TZWI8a1R2QKqBXIcznkQAYWoBdCZBVHrWY9rCGeII6egNSalvhcKFuesqMAZ0Vgb",
        email:"mon@tsl.com",
        password:"india"
}
test.beforeAll("Before all set up base url", async({})=>{
    baseURL  = await request.newContext({baseURL:"https://automationexercise.com"})
})

test("API Login Verification", async({})=>{

    const response  = await baseURL.post("login",{
                        data:requestdata,
                        headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  //  const responseBody = await response.json();
    console.log( response);
    


})
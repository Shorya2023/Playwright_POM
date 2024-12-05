import {test,request, expect} from '@playwright/test'

let baseURL;
const requestdata ={
        email:"mon@ts122l.com",
        password:"indi2a"
}
test.beforeAll("Before all set up base url", async({})=>{
    baseURL  = await request.newContext({baseURL:"https://automationexercise.com"})
})

test("API Login Verification", async({})=>{

    const response  = await baseURL.post("api/verifyLogin",{
                        data:{
                            email:"mon@tsl.com",
                            password:"india"
                    },
                        headers: { 'Content-Type': 'application/json' }
    })
    const responseBody = await response.json();
    console.log(responseBody);
    


})
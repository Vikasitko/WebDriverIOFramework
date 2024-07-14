//describe will take two arguments, one is suite name and 2nd one is function
//functions() can be written as ()=> , it is anonymous function means no name
describe('Ecommerce Application', async()=>
{


    //It block is takes two paramenters, one is title and 2nd one is function

    //if we do not want to run test case just put x before to it
    xit('Login Fail page', async()=>
{
    //webdriverio Async (no gurantee that all stpes will get executed in sequencly like java , python)
      //status are - resolved, pending and rejected are nothing but promise return so make it synchronous 
    //so use await and if we using this , make sure your function should be async means conde is written async 
    //but handling with await to make it executable of particular statement

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
  
    console.log(await browser.getTitle())
   await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

   //stable locator for webdriverio is css Selector, xpath
   //if id = #id , class= .className

   //tagname[attribute='value']
   await $("input[id='username']").setValue("rahulshettyacademy")
   //await browser.pause(30000) //just for pause
   //await $("#username").setValue("secondCSS")

   const password= $("//input[@type = 'password']") //first assign and use it
   await password.setValue('learning')
   await $("#signInBtn").click()

   //class="alert alert-danger col-md-12" it is from html tag to get error message having three classes separated by space so use any one

   //await browser.pause(30000) 
   //browser.waitUntil(condition, { timeout, timeoutMsg, interval }) //explicit wait
   await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')==='Sign In',
   {
    timeout:5000,
    timeoutMsg:'Error  Message is not showing up'
   })
   console.log(await $(".alert-danger").getText())

   //assertion 
   await expect($("p")).toHaveTitleContaining('username is rahulshettyacademy and Password is learning')

})

it('Login success page title', async function(){ //it will retry 3 times if fails
  this.retries(3)
     await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
     await $("input[id='username']").setValue("rahulshettyacademy")
     const password= $("//input[@type = 'password']") //first assign and use it
     await password.setValue('learning')
     await $("#signInBtn").click()

  
 //wait untill  checkout button is displayed so we will confirm that new page is opened
 //locator 
 // direct write ... tagname
 //or  ParenttagName childtagName ex- ul a

 await $(".btn-primary").waitForExist()
 //we can pass browser level to check the data like url and all
 await expect(browser).toHaveUrlContaining("shop")
 await expect(browser).toHaveTitle("ProtoCommerce")
  
  })

}) 
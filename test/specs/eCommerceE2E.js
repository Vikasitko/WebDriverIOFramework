
const expectchai = require('chai').expect
describe('Ecommerce Application', async()=>
{
    it('End to End Test', async()=>
    {
        const products = ['iphone X','Blackberry']
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
   // await browser.url("/loginpagePractise/") //it will take baseUrl from wdio.conf.js file and run  

    await $("input[id='username']").setValue("rahulshettyacademy")
    const password= $("//input[@type = 'password']")
    await password.setValue('learning')
    await $("#signInBtn").click()
   //wait until checkout button is displayed
    const checkOutLink = await $("*=Checkout")//partial link text
    await checkOutLink.waitForExist() 
    const cards = await $$("div[class='card h-100']") //css selector

    for(let i = 0; i<await cards.length; i++)
        {
            const card = cards[i].$('div h4 a') //chaining locator
            if(products.includes(await card.getText())) //it will check whether element is added  in array or not
                {
                    await cards[i].$(".card-footer button").click()
                }
        }
        await checkOutLink.click()
       const productPrices = await $$("//tr/td[4]/strong")
       //string -> integer
       //Stream async mode
      //await Promise.all is used when multiple await are there 
       const sumOfProducts= (await Promise.all(await productPrices.map(async (productPrice)=>parseInt((await productPrice.getText()).split(".")[1].trim()))) ) //[1] it will store only numeric value bt at 0th position , ruppes sign will be there 
       .reduce((acc, price)=>acc+price,  0) //reduce method will take 2 paramenters
       await browser.pause(3000)
       console.log(sumOfProducts)

       const TotalValue = await $("h3 strong").getText()
       const totalIntegerValue = parseInt(TotalValue.split('.')[1].trim())
       await expectchai(sumOfProducts).to.equal(totalIntegerValue)


       await $(".btn-success").click()
       await $("#country").setValue("ind")
       await $(".lds-ellipsis").waitForExist({reverse:true}) // 3 dots will disappered 
       await $("=India").click()
       await $("input[type='submit']").click()
       await expect($(".alert-success")).toHaveTextContaining("Success")




})

}) 
const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shopPage')
const reviewPage = require('../pageobjects/reviewPage')
const confirmPage = require('../pageobjects/confirmPage')
const expectchai = require('chai').expect
//pass json file and convert into string byte format so below library is required
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eProducts = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application', async () => {

    //here need to pass test data 

    credentials.forEach(  ({username, password}) => {

    it('Login Fail page Smoke', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

        await loginPage.Login(username, password)
        console.log(await loginPage.alert.getText())

        await browser.waitUntil(async () => await loginPage.signIn.getAttribute('value') === 'Sign In',
            {
                timeout: 5000,
                timeoutMsg: 'Error Message is not showing up'
            })
        console.log(await loginPage.alert.getText())

        //assertion 
        await expect(await loginPage.textInfo).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
    })
})

    e2eProducts.forEach(  ({products}) => {

    it('End to End Test', async()=>
        {
        //const products = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginPage.Login("rahulshettyacademy", "learning")
        await shopPage.checkout.waitForExist() 
        await shopPage.addProductToCart(products)   
        await shopPage.checkout.click()

        sumOfProducts = await reviewPage.sumOfProducts()
        totalIntegerValue = await reviewPage.totalFormattedPrice()
        await expectchai(sumOfProducts).to.equal(totalIntegerValue)
    
    
           await confirmPage.successButton.click()
           await confirmPage.countrySet.setValue("ind")
           await confirmPage.threeDots.waitForExist({reverse:true}) // 3 dots will disappered 
           await confirmPage.IndiaClick.click()
           await confirmPage.submit.click()
           await expect(confirmPage.success).toHaveTextContaining("Success")
    })


}) 
})

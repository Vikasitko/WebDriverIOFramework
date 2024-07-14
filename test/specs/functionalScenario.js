const expectchai = require('chai').expect
describe('Functional Testing on application', async()=>
{

xit('Scrolling and Mouse hover', async()=>
  {
  
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
     await $("#mousehover").scrollIntoView()
     await browser.pause(3000)
     await $("#mousehover").moveTo()
     await browser.pause(3000)
     await $("=Top").click() //link text
     await browser.pause(30000)


     await browser.url("http://only-testing-blog.blogspot.com/20114/09/selecttable.html")
     await  $("button").doubleClick()
     console.log(await browser.isAlertOpen())
      expectchai(await browser.isAlertOpen()).to.be.true
      expectchai( await browser.getAlertText()).to.equal("You double clicked me.. Than ")
      await browser.acceptAlert()
      await browser.pause(30000)


  })

  
it('Web Tables sort Validation', async()=>
  {
  
    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    await $("tr th:nth-child(1)").click() //under tr table th row , out of nth child , taking first one

    //retrieve list of vegs names into array A
    //sort the array A-> Array B
    //compare Array A and Array B
 const vegLocators = await $$("tr td:nth-child(1)")
 const OriginalveggieNames =  await vegLocators.map(async veggie=> await veggie.getText())

 console.log( "Teh vege name area " +OriginalveggieNames)

 const veggies = OriginalveggieNames.slice()  //take copy of array with slice() method
 //Arrays are pass by reference
 const sortedVeggie= veggies.sort()
 console.log("The soerted vege name are " +sortedVeggie)

 expectchai(OriginalveggieNames).to.eql(sortedVeggie)


  })

  it('Web Tables filter Validation', async()=>
    {
      await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
      await $("input[type='search']").setValue("Tomato")

       const veggieLocators= await $$("tr td:nth-child(1)")
      await expect(veggieLocators).toBeElementsArrayOfSize({eq: 1})

     console.log(await veggieLocators[0].getText())
     await expect(await veggieLocators[0]).toHaveTextContaining("Tomato")


    })

})
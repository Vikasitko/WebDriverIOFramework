const expectchai = require('chai').expect
describe('Windows and Frames Miscellanous', async()=>
{

it('Parent and Child windows switch', async()=>
  {

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $(".blinkingText").click()
    //switch 

   const handles = await browser.getWindowHandles() //2 windows
   await browser.switchToWindow(handles[1]) //open by application
    console.log(await $("h1").getText())
    console.log(await browser.getTitle())

    //browser.closeWindow()
    await browser.switchToWindow(handles[0])
    console.log(await browser.getTitle())

    //open new browser and hit url
    await browser.newWindow("https://google.com") //by automation code
    console.log(await browser.getTitle())

    //back to parent window

await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
await $("#username").setValue("IamVikas")
browser.pause(3000)


  })

it('Frames switch Smoke', async()=>
    {
  
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")

      await $("#mousehover").scrollIntoView()
      await browser.pause(3000)
      console.log(await $$("a").length) //anchor tag
      //switch to frame
     await browser.switchToFrame(await $("[id='courses-iframe']"))
     console.log(await $("=Courses").getTagName())
      console.log(await $$("a").length)
  
     await browser.pause(3000)
     //back to main farme

    await browser.switchToFrame(null)
    console.log(await $$("a").length)
  
  
    })

})
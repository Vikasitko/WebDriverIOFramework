
const expectchai = require('chai').expect
describe('UI Control Test Suite', async()=>
{

it('UI Controls', async()=>
  {
  
     await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
     await $("input[id='username']").setValue("rahulshettyacademy")
     const password= $("//input[@type = 'password']") //first assign and use it
     await password.setValue('learning')
     //const radioButtons = await $$(".radiotextsty") //return more than one elements so $$
     //const userDropdown = radioButtons[1]
     //await userDropdown.click()
     //2nd way with child parent relationship means chaning locator

     const radioButtons = await $$(".customradio")
     const userDropdown = radioButtons[1]
     await userDropdown.$("span").click() //chaining locator
    
     const modal = await $(".modal-body")
     await modal.waitForDisplayed()
     await $("#cancelBtn").click()
     //now  need to check if admin button is selected
     console.log(await $$(".customradio")[0].$("span").isSelected())

     //again select User button and click on ok button

     await userDropdown.$("span").click()
     await modal.waitForDisplayed()
     await $("#okayBtn").click()

     //validate pop up not shown up when you select admin

     await $$(".customradio")[0].$("span").click()
     //assertion
     await expect(modal).not.toBeDisplayed()

     //select dropdown value
      const dropDown = await $("select.form-control")
      await dropDown.selectByAttribute('value', 'teach')
      await browser.pause(3000)
      await dropDown.selectByVisibleText("Consultant")
      await dropDown.selectByIndex(0)

      await browser.pause(3000)
      console.log(await dropDown.getValue())



//chai assertions
//npm install chai

expectchai(await dropDown.getValue()).to.eql("stud") 
     //await $("#signInBtn").click()
  })



  it('Dynamic Dropdown Controls Smoke', async()=>
  {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    await $("#autocomplete").setValue("ind")
   await browser.pause(3000)

    //let items = await $$("[class='ui-menu-item'] div")
    let items = await $$("//li[@class='ui-menu-item']/div")

    for(var i = 0; i < await items.length; i++)
      {
        if(await items[i].getText() === "India")
        {
          await items[i].click()
        }
      }
      await browser.pause(3000)
  
})

it('Checkboxes Identification', async ()=>
{
  await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
  const elements = await $$("input[type='checkbox']")
  await elements[1].click()
  console.log(await elements[1].isSelected()) //true
  console.log( await elements[2].isSelected()) //false
  //take screensheet on fly

  await browser.saveScreenshot("screenshot.png")
}
)

}) 
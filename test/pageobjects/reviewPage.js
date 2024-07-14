
class ReviewPage {

    get productPrices() {
        return $$("//tr/td[4]/strong")
       
    }
    get totalPrice() {
        return $("h3 strong")
    }
    //one method need to write and this.cards should be implemented to call current class proprties

 async sumOfProducts()
 {
    const sumOfProducts= (await Promise.all(await this.productPrices.map(async (productPrice)=>parseInt((await productPrice.getText()).split(".")[1].trim()))) ) //[1] it will store only numeric value bt at 0th position , ruppes sign will be there 
    .reduce((acc, price)=>acc+price,  0) //reduce method will take 2 paramenters
    await browser.pause(3000)
    console.log(sumOfProducts)
 }

 async totalFormattedPrice()
 {
    const TotalValue = await this.totalPrice.getText()
    const totalIntegerValue = parseInt(TotalValue.split('.')[1].trim())
 }





}
module.exports = new ReviewPage();

class ShopPage {

    get checkout() {
        return $("*=Checkout")
       
    }
    get cards() {
        return $$("div[class='card h-100']")
    }
    //one method need to write and this.cards should be implemented to call current class proprties

    async addProductToCart(products)
    {
        
        for(let i = 0; i<await this.cards.length; i++)
            {
                const card = await this.cards[i].$('div h4 a') //chaining locator
                if(products.includes(await card.getText())) //it will check whether element is added  in array or not
                    {
                        await this.cards[i].$(".card-footer button").click()
                    }
            }
    }





}
module.exports = new ShopPage();
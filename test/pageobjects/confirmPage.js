
class ConfirmPage {

    get successButton() {
        return $(".btn-success")
       
    }
    get countrySet() {
        return $("#country")
    }

    get threeDots() {
        return $(".lds-ellipsis")
    }

    get IndiaClick() {
        return $("=India")
    }

    get submit() {
        return $("input[type='submit']")
    }

    get success() {
        return $(".alert-success")
    }

}
module.exports = new ConfirmPage();
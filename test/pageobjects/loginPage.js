//export class loginPage { OR like below at last step ji

  class loginPage {
    get userName() {
        return $("input[id='username']")
    }
    get password() {
        return $("//input[@type = 'password']")
    }

    get alert() {
        return $(".alert-danger")
    }

    get signIn() {
        return $("#signInBtn")
    }

    get textInfo() {
        return $("p")
    }

    async Login(userName, password) {
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.signIn.click()
    }


}
module.exports = new loginPage();
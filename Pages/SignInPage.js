export class SignInPage {
    get emailAddressInputField() { return $('#email') };
    get passwordInputField() { return $('#password') };
    get signInBtn() { return $('button.btnSubmit.mb-3') };

    async signIn(email, password) {
        await this.emailAddressInputField.setValue(email); //TESTING@gmail.com
        await this.passwordInputField.setValue(password); //12345Qwerty@789
        await this.signInBtn.click();
    }
}
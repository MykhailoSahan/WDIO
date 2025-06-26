const signUpPage = require('./SignUpPage');

export class SignInPage extends signUpPage {
    get emailAddressInputField() { return $('#email') };
    get passwordInputField() { return $('#password') };
    get signInBtn() { return $('button.btnSubmit.mb-3') };

    async signIn() {
        await this.emailAddressInputField.setValue('testmail@g.mail.com');
        await this.passwordInputField.setValue('Qwerty123@456789');
        await this.signInBtn.click();
    }
}


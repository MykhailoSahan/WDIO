import { BasePage } from "./BasePage";

export class SignInPage extends BasePage {
    get emailAddressInputField() { return $('#email') };
    get passwordInputField() { return $('#password') };
    get signInBtn() { return $('button.btnSubmit.mb-3') };

    async signIn(email, password) {
        await this.emailAddressInputField.setValue(email);
        await this.passwordInputField.setValue(password);
        await this.signInBtn.click();
    }
}
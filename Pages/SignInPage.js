import { BasePage } from './BasePage.js';

export class SignInPage extends BasePage {
  get emailAddressInputField() {
    return $('#email');
  }
  get passwordInputField() {
    return $('#password');
  }
  get signInBtn() {
    return $('.btnSubmit');
  }

  async isOpen() {
    return await this.emailAddressInputField.isDisplayed();
  }

  async signIn(email, password) {
    await this.emailAddressInputField.setValue(email);
    await this.passwordInputField.setValue(password);
    await this.signInBtn.click();
  }
}

const mainPage = require('./MainPage');

export class SignUpPage extends mainPage {
    get registerAccountBtn() { return $("//a[text()='Register your account']") };
    get firstNameInputField() { return $('#first_name') };
    get lastNameInputField() { return $('#last_name') };
    get dateOfBirthInputField() { return $('#dob') };
    get streetAddressInputField() { return $('#address') };
    get postalCodeInputField() { return $('#postal_code') };
    get cityInputField() { return $('#city') };
    get stateInputField() { return $('#state') };
    get countryDropDown() { return $('#country') };
    get phoneNumberInputField() { return $('#phone') };
    get emailInputField() { return $('#email') };
    get passwordInputField() { return $('#password') };
    get registerConfirmBtn() { return $('button.btnSubmit.mb-3') };


    async signUp() {
      await mainPage.signInBtn.click();
      await this.registerAccountBtn.click();
      await this.firstNameInputField.setValue('John');
      await this.lastNameInputField.setValue('Doe');
      await this.dateOfBirthInputField.setValue('10102000'); // DDMMYYYY format
      await this.streetAddressInputField.setValue('123 Main St');
      await this.postalCodeInputField.setValue('12345');
      await this.cityInputField.setValue('Test City');
      await this.stateInputField.setValue('Test State');
      await this.countryDropDown.selectByVisibleText('Ukraine');
      await this.phoneNumberInputField.setValue('1234567890');
      await this.emailInputField.setValue('testmail@g.mail.com');
      await this.passwordInputField.setValue('Qwerty123@456789');
      await this.registerConfirmBtn.click();
      await browser.pause(2000);
    }
}
import { BasePage } from "./BasePage.js";
import { testData } from "../test/testData.js";

export class SignUpPage extends BasePage {
    get registerAccountBtn() { return $("//a[text()='Register your account']") };
    get firstNameInputField() { return $('#first_name') };
    get lastNameInputField() { return $('#last_name') };
    get dateOfBirthInputField() { return $('#dob') };
    get streetAddressInputField() { return $('#street') };
    get postalCodeInputField() { return $('#postal_code') };
    get cityInputField() { return $('#city') };
    get stateInputField() { return $('#state') };
    get countryDropDown() { return $('#country') };
    get phoneNumberInputField() { return $('#phone') };
    get emailInputField() { return $('#email') };
    get passwordInputField() { return $('#password') };
    get registerConfirmBtn() { return $('button.btnSubmit.mb-3') };


    async signUp() {
        await this.signInBtn.click();
        await this.registerAccountBtn.click();
        await this.firstNameInputField.setValue(testData.user.firstName);
        await this.lastNameInputField.setValue(testData.user.lastName);
        await this.dateOfBirthInputField.setValue(testData.user.dateOfBirth);
        await this.streetAddressInputField.setValue(testData.user.streetAddress);
        await this.postalCodeInputField.setValue(testData.user.postalCode);
        await this.cityInputField.setValue(testData.user.city);
        await this.stateInputField.setValue(testData.user.state);
        await this.countryDropDown.selectByVisibleText(testData.user.country);
        await this.phoneNumberInputField.setValue(testData.user.phoneNumber);
        await this.emailInputField.setValue(testData.user.email);
        await this.passwordInputField.setValue(testData.user.password);
        await this.registerConfirmBtn.click();
    }
}
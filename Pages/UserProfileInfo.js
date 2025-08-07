import { BasePage } from './BasePage.js';

export class UserProfileInfo extends BasePage {
  get profileBtn() {
    return $('.btn.btn-outline-secondary');
  }
  get firstNameInputField() {
    return $('#first_name');
  }
  get lastNameInputField() {
    return $('#last_name');
  }
  get updateProfileBtn() {
    return $('button[type="submit"]');
  }
  get signInCheck() {
    return $('[data-test="page-title"]');
  }

  async updateProfile(firstName, lastName) {
    await this.profileBtn.click();
    await this.firstNameInputField.clearValue();
    await this.firstNameInputField.setValue(firstName);
    await this.lastNameInputField.clearValue();
    await this.lastNameInputField.setValue(lastName);
    await this.updateProfileBtn.click();
  }
}

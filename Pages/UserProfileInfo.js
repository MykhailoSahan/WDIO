import { BasePage } from "./BasePage.js";

export class UserProfileInfo extends BasePage {
    get profileBtn() { return $('.btn.btn-outline-secondary') }
    get firstNameInputField() { return $('#first_name') }
    get lastNameInputField() { return $('#last_name') }
    get updateProfileBtn() { return $('button[type="submit"]') }
    get signInCheck() { return $('[data-test="page-title"]') }

    async updateProfile(updateFirstName, updateLastName) {
        await this.profileBtn.click();
        await this.firstNameInputField.addValue(updateFirstName);
        await this.lastNameInputField.addValue(updateLastName);
        await this.updateProfileBtn.click();
    }
}
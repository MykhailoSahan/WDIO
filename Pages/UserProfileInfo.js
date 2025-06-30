export class UserProfileInfo {
    get profileBtn() { return $('.btn.btn-outline-secondary') };
    get firstNameInputField() { return $('#first_name') };
    get lastNameInputField() { return $('#last_name') };
    get apdateProfileBtn() { return $('button[type="submit"]') };

    async updateProfile(updatefirstName, updatelastName) {
        await this.profileBtn.click();
        await this.firstNameInputField.addValue(updatefirstName);
        await this.lastNameInputField.addValue(updatelastName);
        await this.apdateProfileBtn.click();
    }
}
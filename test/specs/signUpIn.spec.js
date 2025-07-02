import { BasePage } from "../../Pages/BasePage.js";
import { SignUpPage } from "../../Pages/SignUpPage.js";
import { SignInPage } from "../../Pages/SignInPage.js";
import { UserProfileInfo } from "../../Pages/UserProfileInfo.js";
import { testData } from "../../Data/testData.js";

const basePage = new BasePage();
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
const userProfileInfo = new UserProfileInfo();

describe('Sign Up/In Page Tests', () => {

    before(async () => {
        await basePage.open();
        const title = await browser.getTitle();
        expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
    })

    it("should navigate to the sign up page and fill in the form", async () => {
        await basePage.signInBtn.click();
        await signUpPage.signUp();
        expect(signInPage).isOpen = true;
    })

    it("should sign in with the registered account", async () => {
        await signInPage.signIn(testData.user.email, testData.user.password);
        expect(userProfileInfo.signInCheck).toBeDisplayed();
    })

    it("should update user profile information", async () => {
        await userProfileInfo.updateProfile(testData.update.firstName, testData.update.lastName);
        const firstName = await userProfileInfo.firstNameInputField.getValue();
        const lastName = await userProfileInfo.lastNameInputField.getValue();
        expect(firstName).toBe('Johnas');
        expect(lastName).toBe('Doele');
    })
})
// const mainPage = require('../Pages/MainPage.js');
// const signUpPage = require('../Pages/SignUpPage.js');

import { MainPage } from "../../Pages/MainPage.js";

// const signInPage = require('../Pages/SignInPage.js');
const mainPage = new MainPage();

describe('Sign Up/In Page Tests', () => {

    // beforeEach(async () => {
    //     await browser.url('https://practicesoftwaretesting.com/');
    it("should open the main page", async () => {
        // await browser.url('https://practicesoftwaretesting.com/');
        await mainPage.open();
        const title = await browser.getTitle();
        expect(title).toBe('Practice Software Testing');
    })

    // it("should navigate to the sign up page and fill in the form", async () => {
    //     await mainPage.signInBtn.click();
    //     await signUpPage.signUp();
    //     // expect(signInPage).isOpen = true;
    // })

    // it("should sign in with the registered account", async () => {
    //     await signInPage.signIn();
    // })
})
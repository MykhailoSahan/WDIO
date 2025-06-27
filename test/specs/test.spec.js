import { MainPage } from "../../Pages/MainPage.js";
import { SignUpPage } from "../../Pages/SignUpPage.js";
import { SignInPage } from "../../Pages/SignInPage.js";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

describe('Sign Up/In Page Tests', () => {

    before(async () => {
        await browser.url('https://practicesoftwaretesting.com/')
    })

    it("should open the main page", async () => {
        const title = await browser.getTitle();
        expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
    })

    it("should navigate to the sign up page and fill in the form", async () => {
        await mainPage.signInBtn.click();
        await signUpPage.signUp();
        expect(signInPage).isOpen = true;
    })

    it("should sign in with the registered account", async () => {
        await signInPage.signIn('TESTING@gmail.com', '12345Qwerty@789');
    })
})
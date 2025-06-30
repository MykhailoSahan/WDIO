export class BasePage {
    async open() {
        await browser.url('https://practicesoftwaretesting.com/');
        await browser.maximizeWindow();
    }

    get signInBtn() { return $('[data-test="nav-sign-in"]') }
    get categorisDropDownBar() { return $('[data-test="nav-categories"]') }

}
import { assert } from 'chai';

export class BasePage {
    async open() {
        await browser.url('https://practicesoftwaretesting.com/');
        await browser.maximizeWindow();
        const title = await browser.getTitle();
        assert.include(title, 'Practice Software Testing - Toolshop - v5.0');
    }

    get signInBtn() { return $('[data-test="nav-sign-in"]') }
    get categorisDropDownBar() { return $('[data-test="nav-categories"]') }
    get profileName() { return $('a#menu') }
    get myFavorites() { return $('[data-test="nav-favorites"]') }

}
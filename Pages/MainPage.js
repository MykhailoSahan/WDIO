export class MainPage {
    get signInBtn() { return $('//*[@id="navbarSupportedContent"]/ul/li[4]/a') };
    get categorisDropDownBar() { return $('//*[@id="navbarSupportedContent"]/ul/li[3]/a') };
    get searchInputField() { return $('#search-query') };
}


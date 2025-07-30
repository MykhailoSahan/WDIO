import { BasePage } from "./BasePage.js";
const basePage = new BasePage();

export class MainPage extends BasePage {
  get searchInput() {
    return $('[data-test="search-query"]');
  }
  get searchBtn() {
    return $('[data-test="search-submit"]');
  }
  get selectProduct() {
    return $('img[alt="Combination Pliers"]');
  }

  async searchExactProduct(product) {
    await basePage.open();
    await this.searchInput.setValue(product);
    await browser.keys("Enter");
  }
}

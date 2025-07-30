import { BasePage } from '../../Pages/BasePage.js';
import { MainPage } from '../../Pages/MainPage.js';
import { ProductsPage } from '../../Pages/ProductsPage.js';
import { SidebarPage } from '../../Pages/SideBarPage.js';

const basePage = new BasePage();
const mainPage = new MainPage();
const productsPage = new ProductsPage();
const sidebar = new SidebarPage();

describe('Test with Products', () => {
  before(async () => {
    await basePage.open();
  });

  it('Product detail', async () => {
    await mainPage.selectProduct.click();
    await productsPage.verifyProductDetails();
  });

  it('Add product to cart and make favorites', async () => {
    await productsPage.addProductToCart();
    await productsPage.addToFavorites();
    await productsPage.checkCartPrice();
  });

  it('Search exact product', async () => {
    await mainPage.searchExactProduct('hammer');
    await productsPage.allProductsContain('hammer');
  });

  it.skip('shuold filter products by category', async () => {
    await sidebar.selectCategoryByName('Hand Tools');
    // cant be tested because of the bug in the app
  });

  it('should filter products by brand', async () => {
    await sidebar.selectBrandByName('ForgeFlex Tools');
    await productsPage.allProductsContainBrand('ForgeFlex Tools');
  });
});

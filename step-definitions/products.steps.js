import { Given, Then, When } from '@wdio/cucumber-framework';
import { BasePage } from '../Pages/BasePage.js';
import { MainPage } from '../Pages/MainPage.js';
import { ProductsPage } from '../Pages/ProductsPage.js';
import { SidebarPage } from '../Pages/SideBarPage.js';
import { should, assert } from 'chai';
should();

const basePage = new BasePage();
const mainPage = new MainPage();
const productsPage = new ProductsPage();
const sidebar = new SidebarPage();

Given('I am on the main page', async () => {
  await basePage.open();
  const title = await browser.getTitle();
  assert.include(title, 'Practice Software Testing', 'Title does not match');
});
Given('I am on a product details page for "Combination Pliers"', async () => {
  await mainPage.searchExactProduct('Combination Pliers');
});
Given('I am signed in and on a product details page', async () => {
  await basePage.open();
  await mainPage.selectProduct.click();
  await productsPage.verifyProductDetails();
});
Given('I am on the main page and want search the exact product', async () => {
  await basePage.open();
});
Given('I am on the main page and want filter product by brand', async () => {
  await basePage.open();
});

When('I click on a product title', async () => {
  await mainPage.selectProduct.click();
});
When('I click the "Add to Cart" button', async () => {
  await productsPage.addProductToCart();
});
When('I click the "Add to Favorites" button', async () => {
  await productsPage.addToFavorites();
});
When('I search the "Claw Hammer" in the search bar', async () => {
  await mainPage.searchExactProduct("Claw Hammer");
});
When('I select a "ForgeFlex Tools" brand from the filters', async () => {
    await sidebar.selectBrandByName('ForgeFlex Tools');
});

Then('I should be taken to the product details page', async () => {
  await productsPage.productDescription.isDisplayed();
});
Then('I should see the product name, price, and description', async () => {
  await productsPage.verifyProductDetails();
});
Then('the product should be added to my basket', async () => {
  const cartIconText = await productsPage.cartIcon.getText();
  cartIconText.should.equal('1', 'Product was not added to the basket');
});
Then('I should see the updated basket count', async () => {
  const cartIconText = await productsPage.cartIcon.getText();
  cartIconText.should.equal('1', 'Basket count was not updated');
});
Then('the basket total price should include the product price "$14.15"', async () => {
  await productsPage.checkCartPrice();
});
Then('the product should be added to my favorites list', async () => {
    await productsPage.checkCartPrice();
});
Then('the search results should display the list of hammers', async () => {
  await productsPage.allProductsContain('hammer');
});
Then('I should see only products that belong to the selected brand', async () => {
    await productsPage.allProductsContainBrand('ForgeFlex Tools');
});
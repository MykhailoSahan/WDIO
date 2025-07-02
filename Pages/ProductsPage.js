import { MainPage } from "./MainPage";
import { testData } from "../Data/testData";
import { BasePage } from "./BasePage";
const basePage = new BasePage();

export class ProductsPage extends MainPage {
    get productTitle() { return $('[data-test="product-name"]') }
    get productPrice() { return $('[data-test="unit-price"]') }
    get productDescription() { return $('#description') }
    get addToCartBtn() { return $('#btn-add-to-cart') }
    get cartIcon() { return $('[data-test="nav-cart"]') }
    get iconAddingMsgClick() { return $('#toast-container') } // This is used to close the toast notification after adding a product to the cart
    get iconAddedMsgClick() { return $('#toast-message') } // This is used to close the toast notification after adding a product to the cart

    async closeToastNotification() {
        if (await this.iconAddedMsgClick.waitForDisplayed({ timeout: 2000, reverse: false }).catch(() => false)) {
            await this.iconAddedMsgClick.click();
        } else if (await this.iconAddingMsgClick.waitForDisplayed({ timeout: 2000, reverse: false }).catch(() => false)) {
            await this.iconAddingMsgClick.click();
        }
    }

    async addProductToCart() {
        await this.selectProduct.click();
        await this.addToCartBtn.click();
        await this.closeToastNotification(); // Закриваємо toast
        const cartIconText = await this.cartIcon.getText();
        expect(cartIconText).toBe('1');
    }

    async verifyProductDetails() {
        const title = await this.productTitle.getText();
        const price = await this.productPrice.getText();
        const description = await this.productDescription.getText();
        expect(title).toBe(testData.productInfo.title);
        expect(price).toBe(testData.productInfo.price);
        expect(description).toBe(testData.productInfo.description);
    }

    async checkCartPrice() {
        await this.cartIcon.click();
        const cartPrice = await $('[data-test="cart-total"]').getText();
        expect(cartPrice).toBe('$' + testData.productInfo.price);
    }

    async addToFavorites() {
        const favoriteBtn = await $('#btn-add-to-favorites');
        await favoriteBtn.waitForClickable({ timeout: 5000 });
        await favoriteBtn.click();
        await this.closeToastNotification(); // Закриваємо toast
    }

    async getProductTitles() {
        const titleElements = await $$('[data-test="product-name"]');
        const titles = [];
        for (const el of titleElements) {
            try {
                const text = await el.getText();
                titles.push(text);
            } catch (e) {
                console.log('Error getting text:', e);
            }
        }
        expect(titles.length).toBeGreaterThan(-1);
        return titles;
    }

    async allProductsContain(text) {
        const titles = await this.getProductTitles();
        return titles.length > 0 && titles.every(title => title.includes(text));
    }

    async getProductBrands() {
        const brandElements = await $$('span.badge.rounded-pill.bg-secondary.me-1');
        if (!brandElements.length) return [];
        return Promise.all(brandElements.map(el => el.getText()));
    }

    async allProductsContainBrand(brand) {
        const brands = await this.getProductBrands();
        return brands.length > 0 && brands.every(b => b.includes(brand));
    }

    async selectProductByName(name) {
        const products = await $$('[data-test="product-name"]');
        for (const product of products) {
            if ((await product.getText()) === name) {
                await product.click();
                return;
            }
        }
        throw new Error(`Product with name "${name}" not found`);
    }

    async getProductCategories() {
        const categoryElements = await $$('[data-test="filters"]');
        if (!categoryElements.length) return [];
        return Promise.all(categoryElements.map(el => el.getText()));
    }

    async verifyAllProductsInCategory(category) {
        const categories = await this.getProductCategories();
        expect(categories.every(c => c === category)).toBe(true);
    }
}

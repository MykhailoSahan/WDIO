export class SidebarPage {
  get categoryFilter() { return $$('[data-test="category-filter"] input[type="checkbox"]'); }
  get brandFilter() { return $$('[data-test="brand-filter"] input[type="checkbox"]'); }

  async selectCategoryByName(name) {
    const label = await $(`//label[contains(normalize-space(.), "${name}")]`);
    await label.waitForDisplayed({ timeout: 3000 });
    const input = await label.$('input[type="checkbox"]');
    await input.waitForClickable({ timeout: 3000 });
    await input.click();
  }

  async selectBrandByName(name) {
    const label = await $(`//label[contains(normalize-space(.), "${name}")]`);
    await label.waitForDisplayed({ timeout: 3000 });
    const input = await label.$('input[type="checkbox"]');
    await input.waitForClickable({ timeout: 3000 });
    await input.click();
  }
}

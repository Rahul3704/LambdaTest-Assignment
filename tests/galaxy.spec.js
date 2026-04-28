const { test, expect } = require('@playwright/test');
test('amazon galaxy test', async ({ page }) => {
test.setTimeout(120000);
await page.goto('https://www.amazon.in');
await page.fill('#twotabsearchtextbox','Samsung Galaxy');
await page.keyboard.press('Enter');
await page.waitForTimeout(5000);

const price =
await page.locator('.a-price-whole')
.first()
.textContent();
console.log('Galaxy price is:', price);

const newTabPromise =
page.context().waitForEvent('page');
await page.locator('.s-product-image-container a')
.first()
.click({ force:true });

const newTab = await newTabPromise;
await newTab.waitForLoadState();
await expect(
newTab.locator('body')
).toBeVisible();

console.log('Product page opened');
});
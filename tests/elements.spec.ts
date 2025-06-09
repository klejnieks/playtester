import { test, expect } from '@playwright/test';

test('Ensure all key visible elements are present', async ({ page }) => {
  await page.goto('/');

  const tagsToTest = ['header', 'nav', 'footer', 'h1', 'h2', 'button', 'input', 'form', 'main', 'section'];

  for (const tag of tagsToTest) {
    const elements = page.locator(tag);
    const count = await elements.count();
    expect(count).toBeGreaterThan(0);
  }
});

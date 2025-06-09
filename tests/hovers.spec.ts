import { test, expect } from '@playwright/test';

test('Hover over elements with :hover behavior', async ({ page }) => {
  await page.goto('/');
  const hoverables = page.locator('[class*="hover"], [class*="menu"], nav li');

  const count = await hoverables.count();
  for (let i = 0; i < count; i++) {
    const el = hoverables.nth(i);
    await el.hover();
    expect(await el.isVisible()).toBeTruthy();
  }
});

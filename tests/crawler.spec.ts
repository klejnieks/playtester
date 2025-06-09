import { test, expect } from '@playwright/test';

const visited = new Set<string>();
const baseURL = 'https://www.etrade.com';

test('Crawl and validate all internal pages', async ({ page }) => {
  const toVisit: string[] = ['/'];

  while (toVisit.length > 0) {
    const path = toVisit.shift();
    if (!path || visited.has(path)) continue;

    const url = new URL(path, baseURL).href;
    console.log(`Visiting: ${url}`);
    await page.goto(url, { waitUntil: 'load', timeout: 15000 });
    visited.add(path);

    // 🟢 1. Validate response
    const status = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      return nav?.responseStart || 200;
    });
    expect(status).toBeLessThan(400);

    // 🟢 2. Check key UI elements
    const header = page.locator('header');
    const footer = page.locator('footer');
    expect(await header.isVisible()).toBeTruthy();
    expect(await footer.isVisible()).toBeTruthy();

    // 🟢 3. Test forms if any
    const forms = page.locator('form');
    const formCount = await forms.count();
    for (let i = 0; i < formCount; i++) {
      const inputs = forms.nth(i).locator('input, select, textarea');
      const inputCount = await inputs.count();

      for (let j = 0; j < inputCount; j++) {
        const input = inputs.nth(j);
        const type = await input.getAttribute('type');
        if (type === 'text' || type === 'email') await input.fill('test@example.com');
        else if (type === 'password') await input.fill('password123');
        else if (type === 'checkbox' || type === 'radio') await input.check().catch(() => {});
        else if (await input.evaluate(el => el.tagName === 'SELECT')) await input.selectOption({ index: 1 }).catch(() => {});
      }
    }

    // 🟢 4. Test hoverable elements
    const hoverables = page.locator('[class*="hover"], [class*="menu"], nav li');
    const hoverCount = await hoverables.count();
    for (let i = 0; i < hoverCount; i++) {
      await hoverables.nth(i).hover().catch(() => {});
    }

    // 🟢 5. Discover and queue new links
    const anchors = await page.$$('a[href]');
    for (const anchor of anchors) {
      const href = await anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript')) continue;
      const urlObj = new URL(href, baseURL);

      // only crawl internal pages
      if (urlObj.hostname === new URL(baseURL).hostname && !visited.has(urlObj.pathname)) {
        toVisit.push(urlObj.pathname);
      }
    }
  }
});

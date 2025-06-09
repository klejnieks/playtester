import { test, expect } from '@playwright/test';

test('Validate all links work and don’t return error codes', async ({ page }) => {
  await page.goto('/');
  const links = await page.locator('a').elementHandles();

  for (const link of links) {
    const href = await link.getAttribute('href');
    if (!href || href.startsWith('javascript') || href.startsWith('#')) continue;

    const [response] = await Promise.all([
      page.waitForResponse(res => res.url().includes(href) && res.status() < 400, { timeout: 10000 }).catch(() => null),
      link.click({ button: 'middle' }) // open in new tab simulation
    ]);

    expect(response?.status(), `Broken link: ${href}`).toBeLessThan(400);
    await page.goBack().catch(() => {});
  }
});

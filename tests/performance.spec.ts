import { test, expect } from '@playwright/test';

test('Performance metrics check for homepage', async ({ page }) => {
  const start = Date.now();
  await page.goto('/');

  // Collect performance timing
  const perfTiming = await page.evaluate(() => JSON.stringify(window.performance.timing));
  const timing = JSON.parse(perfTiming);

  const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
  const pageLoad = timing.loadEventEnd - timing.navigationStart;

  console.log('DOM Content Loaded:', domContentLoaded, 'ms');
  console.log('Full Page Load:', pageLoad, 'ms');

  // Assert that load times are within thresholds
  expect(domContentLoaded).toBeLessThan(3000);
  expect(pageLoad).toBeLessThan(6000);
});

test('Check First Contentful Paint', async ({ page }) => {
  await page.goto('/');
  const fcp = await page.evaluate(() =>
    performance.getEntriesByName('first-contentful-paint')[0]?.startTime || -1
  );

  console.log('First Contentful Paint:', fcp, 'ms');
  expect(fcp).toBeGreaterThan(0);
  expect(fcp).toBeLessThan(2500);
});

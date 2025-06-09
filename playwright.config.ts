import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    headless: false,
    baseURL: 'https://www.etrade.com',
    screenshot: 'only-on-failure',  // ✅ take screenshot on failure
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
});

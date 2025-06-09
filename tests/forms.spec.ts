import { test, expect } from '@playwright/test';

test('Check for forms, fill them if accessible', async ({ page }) => {
  await page.goto('/');
  const forms = page.locator('form');

  const count = await forms.count();
  for (let i = 0; i < count; i++) {
    const form = forms.nth(i);
    const inputs = form.locator('input, textarea, select');
    const inputCount = await inputs.count();

    for (let j = 0; j < inputCount; j++) {
      const input = inputs.nth(j);
      const type = await input.getAttribute('type');

      if (type === 'text' || type === 'email') {
        await input.fill('test@example.com');
      } else if (type === 'password') {
        await input.fill('SuperSecret123!');
      } else if (type === 'checkbox' || type === 'radio') {
        await input.check().catch(() => {});
      } else if (await input.evaluate(el => el.tagName === 'SELECT')) {
        await input.selectOption({ index: 1 }).catch(() => {});
      }
    }
  }

  expect(count).toBeGreaterThan(0);
});

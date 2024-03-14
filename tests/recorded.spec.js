import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Muhammad Asad');
  await page.getByRole('link', { name: 'Muhammad Asad Wikipedia https://en.wikipedia.org › wiki › Muhammad_Asad' }).click();
  await page.getByText('During his stay in Saudi').click();
  await page.getByText('During his stay in Saudi').click();
  await page.getByText('During his stay in Saudi').click();
});
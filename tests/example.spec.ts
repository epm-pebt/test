import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('has title', async ({ page }) => {
    await page.goto(`${process.env.URL}`);
    await expect(page).toHaveTitle(`${process.env.TITLE}`);
});

test('get started link', { tag: '@smoke' }, async ({ page }) => {
    await allure.owner('John Doe');
    await page.goto(`${process.env.URL}`);
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage loads and is accessible', async ({ page }) => {
  await page.goto('/');

  // Check that page loads
  await expect(page).toHaveTitle(/Vedant Subramanian/);
  
  // Check key content is present
  // The hero h1 renders the two names as separate blocks, so there is no space between them
  await expect(page.locator('h1')).toHaveText(/Vedant\s*Subramanian/);
  await expect(page.getByRole('link', { name: 'See the work' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Résumé', exact: true })).toHaveAttribute('href', '/Vedant_Subramanian_resume.pdf');

  // Check navigation works
  await expect(page.locator('#home')).toBeVisible();
  
  // Accessibility check - exclude some minor violations that don't affect usability
  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['region']) // Allow content outside landmarks for design flexibility
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('navigation sections exist', async ({ page }) => {
  await page.goto('/');

  // Check all major sections exist
  await expect(page.locator('#home')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#achievements')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
});

test('images load correctly', async ({ page }) => {
  await page.goto('/');

  // Check headshot loads
  const headshot = page.locator('img[alt="Vedant Subramanian"]');
  await expect(headshot).toBeVisible();
  
  // Check that image actually loaded (not broken)
  await expect(headshot).toHaveAttribute('src', /headshot-vedant/);
  expect(await headshot.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
});

test('responsive design works', async ({ page }) => {
  // Test mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  await expect(page.locator('h1')).toBeVisible();
  
  // Test desktop viewport
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator('h1')).toBeVisible();
});
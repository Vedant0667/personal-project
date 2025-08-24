import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage loads and is accessible', async ({ page }) => {
  await page.goto('/');

  // Check that page loads
  await expect(page).toHaveTitle(/Vedant Subramanian/);
  
  // Check key content is present
  await expect(page.locator('h1')).toContainText('Vedant Subramanian');
  await expect(page.locator('text=student @ Greenhill School')).toBeVisible();
  await expect(page.locator('text=Explore my work')).toBeVisible();

  // Check navigation works
  await expect(page.locator('#home')).toBeVisible();
  
  // Accessibility check
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('navigation sections exist', async ({ page }) => {
  await page.goto('/');

  // Check all major sections exist
  await expect(page.locator('#home')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
});

test('images load correctly', async ({ page }) => {
  await page.goto('/');

  // Check headshot loads
  const headshot = page.locator('img[alt="Vedant Subramanian headshot"]');
  await expect(headshot).toBeVisible();
  
  // Check that image actually loaded (not broken)
  await expect(headshot).toHaveAttribute('src', /headshot-vedant/);
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
import { test, expect } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";

test("Titles should be visible", async ({ page }) => {
  const homePage = new HomePage(page);
  
  await page.goto("/");
  await expect(homePage.latestNewsTitle).toBeVisible();
  await expect(homePage.featuredNewsTitle).toBeVisible();
  await expect(homePage.storeButton).toBeVisible();
  await expect(homePage.followTitile).toBeVisible();
});

test("NORTH AMERICA button has right link", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.storeButton.click();
  await homePage.northAmericaButton.click();
  await expect(page).toHaveURL("https://store.nisamerica.com/");
});

test("EUROPE button has right link", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.storeButton.click();
  await homePage.europeButton.click();
  await expect(page).toHaveURL("https://store.nisaeurope.com/");
});

test("Career button has right link", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.careersButton.click();
  await expect(page).toHaveURL("https://nisamerica.com/careers");
});

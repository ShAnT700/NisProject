import { test, expect } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";

let page;
let homePage;

test.describe.configure({ mode: 'serial' }); 

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/"); 
  homePage = new HomePage(page);
});

test.afterAll(async () => {
  await page.close();
});

test("Titles should be visible", async () => {
  await expect(homePage.latestNewsTitle).toBeVisible();
  await expect(homePage.featuredNewsTitle).toBeVisible();
  await expect(homePage.storeButton).toBeVisible();
  await expect(homePage.followTitile).toBeVisible();
});

test("NORTH AMERICA button has right link", async () => {
  await homePage.storeButton.click();
  await homePage.northAmericaButton.click();
  await expect(page).toHaveURL("https://store.nisamerica.com/");
});

test("EUROPE button has right link", async () => {
  await homePage.storeButton.click();
  await homePage.europeButton.click();
  await expect(page).toHaveURL("https://store.nisaeurope.com/");
});

test("Career button has right link", async () => {
  await page.goto("/");
  await homePage.careersButton.click();
  await expect(page).toHaveURL("https://nisamerica.com/careers");
});
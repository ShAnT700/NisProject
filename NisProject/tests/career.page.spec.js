import { test, expect } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";
import { CareerPage } from "../page_objects/CareerPage";

test("Title should be visible & has right text", async ({ page }) => {
  const homePage = new HomePage(page);
  const careerPage = new CareerPage(page);

  await page.goto("/");
  await homePage.careersButton.click();
  await expect(careerPage.careerTitle).toBeVisible();
  await expect(careerPage.careerTitle).toHaveText(/Career/);
});

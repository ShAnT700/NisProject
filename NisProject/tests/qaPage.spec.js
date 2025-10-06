import { test, expect } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";
import { CareerPage } from "../page_objects/CareerPage";
import { QaPage } from "../page_objects/QaPage";
import { faker } from '@faker-js/faker';

test("Title should be visible & has right text", async ({ page }) => {
  const homePage = new HomePage(page);
  const careerPage = new CareerPage(page);
  const qaPage = new QaPage(page);


  await page.goto("/");
  await homePage.careersButton.click();
  await careerPage.qaTesterPositionButton.click();
  await expect(qaPage.h1PositionTitle).toBeVisible();
  await expect(qaPage.h1PositionTitle).toHaveText(/Quality Assurance/);
  
});

test("QA Applying positive", async ({ page }) => {
  const homePage = new HomePage(page);
  const careerPage = new CareerPage(page);
  const qaPage = new QaPage(page);
  const path = require('path');
  
  const fName = faker.person.firstName();
  const fEmail = faker.internet.email();
  const fSubject = faker.lorem.word(8);
  const fMessage = faker.lorem.words(10);
  const filePath = path.join(__dirname, '../images/resume.jpg'); 
  
  await page.goto("/");
  await homePage.careersButton.click();
  await careerPage.qaTesterPositionButton.click();
  await qaPage.nameTextBox.fill(fName);
  await qaPage.emailTextBox.fill(fEmail);
  await qaPage.subjectTextBox.fill(fSubject);
  await qaPage.messageTextBox.fill(fMessage);
  await qaPage.fileImput.setInputFiles(filePath);
  await qaPage.submitButton.click();

  await expect(qaPage.succesSubWindowText).toBeVisible();
  await expect(qaPage.succesSubWinCloseButtn).toBeVisible();
  
});

test("QA Applying negative no data", async ({ page }) => {
  const homePage = new HomePage(page);
  const careerPage = new CareerPage(page);
  const qaPage = new QaPage(page);
    
    
  await page.goto("/");
  await homePage.careersButton.click();
  await careerPage.qaTesterPositionButton.click();
  await qaPage.submitButton.click();

  await expect(qaPage.nameTextBox).toHaveJSProperty('validationMessage', 'Please fill out this field.');
  await expect(qaPage.emailTextBox).toHaveJSProperty('validationMessage', 'Please fill out this field.');
  await expect(qaPage.emailTextBox).toHaveJSProperty('validationMessage', 'Please fill out this field.');

  
});

test("QA Applying negative wrong Email", async ({ page }) => {
  const homePage = new HomePage(page);
  const careerPage = new CareerPage(page);
  const qaPage = new QaPage(page);
  const fName = faker.person.firstName();
  const fSubject = faker.lorem.word(8);
    
    
  await page.goto("/");
  await homePage.careersButton.click();
  await careerPage.qaTesterPositionButton.click();
  await qaPage.nameTextBox.fill(fName);
  await qaPage.emailTextBox.fill(fSubject);
  await qaPage.submitButton.click();

  const validationMessage = await qaPage.emailTextBox.evaluate((el) => el.validationMessage);
  expect(validationMessage).toContain("Please include an '@' in the email address");
  
});


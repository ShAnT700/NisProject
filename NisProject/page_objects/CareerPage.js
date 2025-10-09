export class CareerPage {
  constructor(page) {
    this.page = page;
    this.careerTitle = page.locator('[class="title temp"]');
    this.qaTesterPositionButton = page.getByRole("link", { name: "Quality Assurance / Game Tester (English)" });
  }
}

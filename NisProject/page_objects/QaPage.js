export class QaPage {
  constructor(page) {
    this.page = page;
    this.h1PositionTitle = page.getByRole("heading", { name: "Quality Assurance / Game Tester (English)" }).first();
    this.nameTextBox = page.getByRole("textbox", { name: "Name" });
    this.emailTextBox = page.getByRole("textbox", { name: "Email" }).first();
    this.subjectTextBox = page.getByRole("textbox", { name: "Subject" });
    this.messageTextBox = page.getByRole("textbox", { name: "Message" });
    this.fileImput = page.locator('[class="file-upload"]');
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.succesSubWindowText = page.getByRole("heading", { name: /successfully submitted/ });
    this.succesSubWinCloseButtn = page.getByRole("button", { name: "CLOSE" });

  }
}

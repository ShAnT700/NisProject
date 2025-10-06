export class HomePage {
  constructor(page) {
    this.page = page;
    this.latestNewsTitle = page.locator('[class="top-news_header-title"]');
    this.featuredNewsTitle = page.locator('[class="featured_title"]');
    this.followTitile = page.getByRole("heading", { name: "FOLLOW US, DOOD!" });
    this.storeButton = page.getByRole("heading", { name: "Store" });
    this.northAmericaButton = page.getByRole("link", { name: "NORTH AMERICA" });
    this.europeButton = page.getByRole("link", { name: "EUROPE" });
    this.careersButton = page.getByRole("link", { name: "CAREERS" });
  }
}
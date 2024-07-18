describe("List Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    console.error("Uncaught exception:", err);
    return false;
  });

  it("should have the correct URL for the Google link", () => {
    cy.get("ul li a")
      .contains("Google")
      .should("have.attr", "href")
      .and("match", /https:\/\/www\.google\.com\/?$/);
  });

  it("should have the correct URL for the Facebook link", () => {
    cy.get("ul li a")
      .contains("Facebook")
      .should("have.attr", "href")
      .and("match", /https:\/\/www\.facebook\.com\/?$/);
  });

  it("should have the correct URL for the Twitter link", () => {
    cy.get("ul li a")
      .contains("Twitter")
      .should("have.attr", "href")
      .and("match", /https:\/\/www\.twitter\.com\/?$/);
  });
});

describe("Link Click Test", () => {
  it("should change the URL when a link/item is clicked", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000");
    cy.get("ul > li > a").first().click();

    cy.url().should(
      "not.eq",
      Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000"
    );
  });
});

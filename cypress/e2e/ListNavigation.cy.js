describe("List Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should change URL when clicking on a list item link", () => {
    cy.get("ul > li > a").first().click();

    cy.get("ul > li > a")
      .first()
      .then(($link) => {
        const url = $link.attr("href");
        cy.log(`Captured URL: ${url}`);
        cy.url().should("include", url);
      });
  });
});

describe("Href visit", () => {
  let baseUrl;

  before(() => {
    baseUrl = Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000";
    cy.visit(baseUrl);
  });

  it("captures and visits href from list item", () => {
    cy.get("ul > li > a").first().click();

    cy.url().then((newUrl) => {
      expect(newUrl).to.not.equal(
        baseUrl,
        "URL should change after clicking the list item",
      );
      cy.task("setHref", newUrl);
    });
  });

  it("revisit captured href", () => {
    cy.task("getHref").then((href) => {
      cy.visit(href);
    });
  });

  // address the type warning by checking if href is a string
  // it("revisit captured href", () => {
  //   cy.task("getHref").then((href) => {
  //     if (typeof href === 'string') {
  //       cy.visit(href);
  //     } else {
  //       throw new Error('Captured href is not a string');
  //     }
  //   });
  // });
});

describe("Link Click Test", () => {
  it("should change the URL when a link/item is clicked", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000");
    cy.get("ul > li > a").first().click();

    cy.url().should(
      "not.eq",
      Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000",
    );
  });
});

// one random
describe("Link Click Test", () => {
  it("should change the URL when a random link/item is clicked", () => {
    const baseURL = Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000";

    cy.visit(baseURL);

    cy.get("ul > li > a").then(($links) => {
      const randomIndex = Math.floor(Math.random() * $links.length);
      cy.get("ul > li > a").eq(randomIndex).click();
      cy.url().should("not.eq", baseURL);
      cy.visit(baseURL);
    });
  });
});

// 3 url:

describe("Link Click Test", () => {
  it("should change the URL when a representative sample of links are clicked", () => {
    const baseURL = Cypress.env("CYPRESS_BASE_URL") || "http://localhost:3000";

    cy.visit(baseURL);

    // Click the first link
    cy.get("ul > li > a").first().click();
    cy.url().should("not.eq", baseURL);
    cy.visit(baseURL);

    // Click a link from the middle
    cy.get("ul > li > a")
      .eq(Math.floor(100 / 2))
      .click();
    cy.url().should("not.eq", baseURL);
    cy.visit(baseURL);

    // Click the last link
    cy.get("ul > li > a").last().click();
    cy.url().should("not.eq", baseURL);
  });
});

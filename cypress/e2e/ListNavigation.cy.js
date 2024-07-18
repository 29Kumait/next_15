describe("List Navigation", () => {
  beforeEach(() => {
    cy.visit("/"); // Navigates to the base URL (application's home page).
  });

  // allows the test to proceed even if there are JavaScript errors on the page.
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.error("Uncaught exception:", err);
    return false;
  });

  function testLinkNavigation(linkText, expectedUrl) {
    cy.intercept("GET", expectedUrl).as("externalRequest");
    cy.get("ul li a")
      .contains(linkText)
      .should("be.visible")
      .then((link) => {
        cy.wrap(link).invoke("removeAttr", "target");
        cy.wrap(link).click();
        cy.wait("@externalRequest")
          .its("request.url")
          .should("eq", expectedUrl);
      });
  }
  // Individual Tests for Each Link:
  it("should change the URL when the Google link is clicked", () => {
    testLinkNavigation("Google", "https://www.google.com/");
  });

  it("should change the URL when the Facebook link is clicked", () => {
    testLinkNavigation("Facebook", "https://www.facebook.com/");
  });

  it("should change the URL when the Twitter link is clicked", () => {
    testLinkNavigation("Twitter", "https://www.twitter.com/");
  });
});

// describe("List Navigation", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   Cypress.on("uncaught:exception", (err, runnable) => {
//     // returning false here prevents Cypress from failing the test
//     console.error("Uncaught exception:", err);
//     return false;
//   });

//   it("should have the correct URL for the Google link", () => {
//     cy.get("ul li a")
//       .contains("Google")
//       .should("have.attr", "href")
//       .and("match", /https:\/\/www\.google\.com\/?$/);
//   });

//   it("should have the correct URL for the Facebook link", () => {
//     cy.get("ul li a")
//       .contains("Facebook")
//       .should("have.attr", "href")
//       .and("match", /https:\/\/www\.facebook\.com\/?$/);
//   });

//   it("should have the correct URL for the Twitter link", () => {
//     cy.get("ul li a")
//       .contains("Twitter")
//       .should("have.attr", "href")
//       .and("match", /https:\/\/www\.twitter\.com\/?$/);
//   });
// });

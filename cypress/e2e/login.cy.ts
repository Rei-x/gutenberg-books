it("Login in using anonymous account", () => {
  cy.visit("/");

  cy.findByText(/login/i).click();

  cy.findByText(/login anonymously/i).click();
  cy.url().should("eq", `${Cypress.config().baseUrl}/`);

  cy.findByText(/anonymous/i).click({ force: true });
  cy.deleteUser(); //Cleanup
  cy.findByText(/logout/i).click({ force: true });
});

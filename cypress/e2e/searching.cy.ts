it("Load books and search", () => {
  cy.visit("/");

  const loading = /It can take/i;
  cy.findByText(loading, {
    timeout: 10000,
  }).should("not.be.visible");

  const search = "Pan Tadeusz";
  cy.findByPlaceholderText("Search for your book!").type(search);
  cy.clock().tick(600).invoke("restore");
  cy.findByText(loading).should("be.visible");
  cy.findAllByText(/Pan Tadeusz/i)
    .first()
    .click();
  cy.url().should("contain", "/book/");
});

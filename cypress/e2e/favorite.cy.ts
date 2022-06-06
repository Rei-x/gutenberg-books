it("Mark book as favorite and check if it's in favorite books", () => {
  cy.visit("/");

  cy.login();

  cy.findAllByText(/mark as favorite/i)
    .first()
    .click();

  const unmarkAsFavoriteRegex = /unmark as favorite/i;
  cy.findByText(unmarkAsFavoriteRegex);

  cy.findAllByTestId(/title/i).first().as("title");
  cy.get("@title").click();
  cy.get("@title").then(($title) => {
    const title = $title.text();

    cy.url().should("contain", "/book/");
    cy.findByText(title).should("be.visible");
    cy.findByText(unmarkAsFavoriteRegex).should("be.visible");
    cy.findByText(/read online/i).should("be.visible");

    cy.findByText(/anonymous/i).click({ force: true });

    cy.findByText(/favorite books/i).click();
    cy.url().should("contain", "/favorite-books");
    cy.findByText(title).should("be.visible");
    cy.findByText(unmarkAsFavoriteRegex).should("be.visible");
    cy.findByText(unmarkAsFavoriteRegex).as("unmark");
    cy.get("@unmark").click({ force: true });
    cy.findByText(title).should("not.exist");
    cy.findByText(/you don't have any favorite books/i).should("be.visible");
  });
});

after(() => {
  cy.deleteUser();
});

/// <reference types="cypress"/>

describe("Test związany z zaznaczaniem selecta", () => {
  it("Przejście na stronę women", () => {
    cy.visit("/");
    cy.get('a[title="Women"]').click();
    cy.url().should("include", "/index.php?id_category=3&controller=category");
  });

  it("wybranie opcji inStock", () => {
    cy.get("#selectProductSort").select("In stock");
    cy.get("#selectProductSort").should("have.value", "quantity:desc");
  });

  it("wybranie opcji A-Z", () => {
    cy.get("#selectProductSort").select("name:asc");
    cy.get("#selectProductSort").should("have.value", "name:asc");
  });
});

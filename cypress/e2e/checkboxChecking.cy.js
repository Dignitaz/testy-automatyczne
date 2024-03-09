/// <reference types="cypress"/>

import Base from "../pages/base";
import Home from "../pages/home";
import Women from "../pages/women";

describe("Test związany z zaznaczaniem checkboxów", () => {
  it("Przejście na stronę women", () => {
    Base.openHomePage();
    Home.clickOnWomenTab();
    cy.url().should("include", "/index.php?id_category=3&controller=category");
  });
  it("Zaznaczenie checka", () => {
    Women.checkTops();
    Women.topCheckBox.should("be.checked");
    //cy.get("#layered_category_8").should("not.be.checked");  -- negacje
    Women.checkSizeWhole();
  });
});

/// <reference types="cypress"/>

import Home from "../pages/home";

describe("Dodawanie i usuwanie produktu z koszyka", () => {
  it("Kliknięcie w zakładkę Women", () => {
    Base.openHomePage();
    Home.clickOnWomenTab();
  });
});

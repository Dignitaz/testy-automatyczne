/// <reference types="cypress"/>

import Home from "../pages/home";
import Base from "../pages/base";
import ContactUs from "../pages/contactus";

describe("Kliknięcie w element na stronie", () => {
  it("Kliknięcie w zakładkę Contact Us", () => {
    Base.openHomePage();
    Home.clickOnContactTab();
  });

  it("wybranie opcji Webmaster", () => {
    cy.get("#id_contact").select("Webmaster");
    cy.get("#id_contact").should("have.value", "1");
  });

  it("Wpisanie wartości do inputa Email", () => {
    ContactUs.typeEmail();
  });
  it("Wpisanie wartości do inputa Order", () => {
    ContactUs.typeOrder();
  });
  it("Dołączenie pliku", () => {
    ContactUs.inputFile();
  });
  it("Dodanie treści wiadomości", () => {
    ContactUs.inputMessage();
  });
  it("Wysłanie wiadomości", () => {
    ContactUs.sendEmail();
    cy.contains("Your message has been successfully sent to our team.").should(
      "be.visible"
    );
  });
});

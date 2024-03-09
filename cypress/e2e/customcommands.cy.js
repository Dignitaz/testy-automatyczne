/// <reference types="cypress"/>

import { login, password } from "../fixtures/loginData.json";

describe("custom Commands", () => {
  it("Logowanie do strony automationpractice.pl", () => {
    cy.login(login, password);
  });
});

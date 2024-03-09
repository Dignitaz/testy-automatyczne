/// <reference types="cypress"/>

import Base from "../pages/base";
import Search from "../pages/search";
import resultPage from "../pages/resultPage";
import { searchPharse, notFoundProduct } from "../fixtures/searchData.json";

describe("Wpisywanie tekstu w wyszukiwarkę", () => {
  it("Wpisywanie tekstu", () => {
    Base.openHomePage();
    Search.typeSearchPhrase(searchPharse);
    Search.searchBox.should("have.value", searchPharse);
    // cy.wait(3000);
    Search.clearSearchPharse();
    // cy.wait(3000);
    Search.typeSearchPhrase(`${searchPharse} {enter}`);
    resultPage.searchAlert
      .should("be.visible")
      .and("include.text", notFoundProduct);
    Search.searchBox.should("have.class", "search_query");
    Search.searchBox.should("have.css", "margin-right", "1px");
  });
});

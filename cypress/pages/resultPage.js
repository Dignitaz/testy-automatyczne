class resultPage {
  get searchAlert() {
    return cy.get("p.alert");
  }
}

export default new resultPage();

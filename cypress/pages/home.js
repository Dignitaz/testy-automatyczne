class Home {
  get womenTab() {
    return cy.get('a[title="Women"]');
  }
  get contactTab() {
    return cy.get('a[title="Contact us"]');
  }
  clickOnWomenTab() {
    this.womenTab.click();
  }
  clickOnContactTab() {
    this.contactTab.click();
  }
}

export default new Home();

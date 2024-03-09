class Women {
  get topCheckBox() {
    return cy.get("#layered_category_8");
  }
  get dressesChecBox() {
    return cy.get("#layered_category_4");
  }
  get wholeSizeCheckbox() {
    return cy.get("#ul_layered_id_attribute_group_1 input");
  }
  checkTops() {
    this.topCheckBox.check();
  }
  checkDresses() {
    this.dressesChecBox.check();
  }
  checkSizeWhole() {
    this.wholeSizeCheckbox.check();
  }
}

export default new Women();

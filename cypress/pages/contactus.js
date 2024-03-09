class ContactUs {
  //getters
  get EmailInput() {
    return cy.get("input#email");
  }

  get OrderInput() {
    return cy.get("input#id_order");
  }

  get FileInput() {
    return cy.get("input#fileUpload");
  }

  get MesseageInput() {
    return cy.get("textarea#message");
  }
  get SendEmailbutton() {
    return cy.get("button#submitMessage");
  }

  //methods

  typeEmail() {
    this.EmailInput.type("myemail@gmail.com");
  }
  typeOrder() {
    this.OrderInput.type("123123123");
  }
  inputFile() {
    this.FileInput.fixture("../../somefile.txt");
  }
  inputMessage() {
    this.MesseageInput.type("random message...");
  }
  sendEmail() {
    this.SendEmailbutton.click();
  }
}

export default new ContactUs();

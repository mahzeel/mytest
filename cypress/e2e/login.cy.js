import {login} from "../../cypress/fixtures/selectors.js"

describe("LAUNCH URL", function (){
  beforeEach(function (){
    cy.visit('/')

  });

  it("LOGIN - Should be able to sign in with valid ID", function () {
      cy.wait(2000)
      cy.get(login.loginBtn).click()
      cy.get(login.emailField).type('mahzeeljohn@gmail.com')
      cy.get(login.passwordField).type('E.lens123456')
      cy.get(login.showIcon).click()
      cy.get(login.showIcon).click()
      cy.get(login.signInBtn).click()


  })
})
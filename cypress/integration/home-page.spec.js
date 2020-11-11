/// <reference types="Cypress" />

context('Home Page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Open home page', () => {
    cy.visit('/');
  });

});

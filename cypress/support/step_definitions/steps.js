import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I acess the homepage", () => {
    cy.visit("https://automationexercise.com/")
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

When("I type a wrong user and password", () => {
    cy.get('[data-qa="login-email"]').type('testemail@gmail.com')
    cy.get('[data-qa="login-password"]').type('senhaquenaoexiste{enter}')
})

Then("it must show a message error", () => {
    cy.wait(500)
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})

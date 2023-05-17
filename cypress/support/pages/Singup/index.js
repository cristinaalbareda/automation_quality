/// <reference types="Cypress" />

const elSingupPage = require('./elements').elements

class SingupPage {
    accessPage() {
        cy.visit("https://automationexercise.com/")
        cy.get(elSingupPage.btnMenuSingup).click()
    }

    typeName() {
        cy.get(elSingupPage.inputName).type("automationCris")
    }

    typeEmail() {
        cy.get(elSingupPage.inputEmail).type('autoqualitytest@mailinator.com')
    }

    clickBtnSingup() {
        cy.get(elSingupPage.btnSingup).click()
    }

    typePassword() {
        cy.get(elSingupPage.inputPassword).type('P@ssW0rd')
    }

    typeFirstName() {
        cy.get(elSingupPage.inputFirstName).type('Cristina')
    }

    typeLastName() {
        cy.get(elSingupPage.inputLastName).type('Albareda')
    }

    typeCompany() {
        cy.get(elSingupPage.inputCompany).type('Quality')
    }

    typeAddress() {
        cy.get(elSingupPage.inputAddress).type('Rua Felicidade 123')
    }

    typeAdsress2() {
        cy.get(elSingupPage.inputAddress2).type('Rua Maranhão 925')
    }

    typeState() {
        cy.get(elSingupPage.inputState).type('Santa Catarina')
    }

    typeCity() {
        cy.get(elSingupPage.inputCity).type('Joinville')
    }

    typeZipcode() {
        cy.get(elSingupPage.inputZipcode).type('89200-001')
    }

    typeMobileNumber() {
        cy.get(elSingupPage.inputMobileNumber).type('(47) 9999900001')
    }

    clickBtnCreateAccount() {
        cy.get(elSingupPage.btnCreateAccount).click()
    }
}
export default new SingupPage()


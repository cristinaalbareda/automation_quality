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
        if (Cypress.env('country') === "BR") {
            cy.get(elSingupPage.inputAddress).type('Rua Itabera 1409')
        }
        else if (Cypress.env('country') === "EN") {
            cy.get(elSingupPage.inputAddress).type('2220 Steve Hunt Road')
        }
        else if (Cypress.env('country') === "AL") {
            cy.get(elSingupPage.inputAddress).type('Ansbacher Strasse 9')
        }

    }

    typeAdsress2() {
        if (Cypress.env('country') === "BR") {
            cy.get(elSingupPage.inputAddress).type('Rua Nabor Lemos 1571')
        }
        else if (Cypress.env('country') === "EN") {
            cy.get(elSingupPage.inputAddress).type('792 Rinehart Road')
        }
        else if (Cypress.env('country') === "AL") {
            cy.get(elSingupPage.inputAddress).type('An der Schillingbrucke 50')
        }
    }

    typeState() {
        if (Cypress.env('country') === "BR") {
            cy.get(elSingupPage.inputState).type('São Paulo')
        }
        else if (Cypress.env('country') === "EN") {
            cy.get(elSingupPage.inputState).type('Florida')
        }
        else if (Cypress.env('country') === "AL") {
            cy.get(elSingupPage.inputState).type('Rheinland-Pfalz')
        }
    }

    typeCity() {
        if (Cypress.env('country') === "BR") {
            cy.get(elSingupPage.inputCity).type('Avaré')
        }
        else if (Cypress.env('country') === "EN") {
            cy.get(elSingupPage.inputCity).type('Miami')
        }
        else if (Cypress.env('country') === "AL") {
            cy.get(elSingupPage.inputCity).type('Rhaunen')
        }
    }

    typeZipcode() {
        if (Cypress.env('country') === "BR") {
            cy.get(elSingupPage.inputZipcode).type('18704-130')
        }
        else if (Cypress.env('country') === "EN") {
            cy.get(elSingupPage.inputZipcode).type('33131')
        }
        else if (Cypress.env('country') === "AL") {
            cy.get(elSingupPage.inputZipcode).type('55624')
        }
    }

    typeMobileNumber() {
        cy.get(elSingupPage.inputMobileNumber).type('(47) 9999900001')
    }

    clickBtnCreateAccount() {
        cy.get(elSingupPage.btnCreateAccount).click()
    }
}
export default new SingupPage()


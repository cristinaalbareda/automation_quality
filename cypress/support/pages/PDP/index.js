/// <reference types="Cypress" />

const elProductPage = require('./elements').elementsPDP
require('cypress-xpath')

class ProductPage {
    accessProductPage() {
        cy.visit("https://automationexercise.com/product_details/1")
    }

    checkImage() {
        cy.get(elProductPage.imgProduct)
    }

    checkQty() {
        cy.xpath(elProductPage.quantity)
    }

    checkBtnAddCart() {
        cy.get(elProductPage.btnAddCart)
    }

    checkReviewName() {
        cy.get(elProductPage.reviewName)
    }

    checkReviewEmail() {
        cy.get(elProductPage.reviewEmail)
    }

    checkReviewText() {
        cy.get(elProductPage.reviewText)
    }
}
export default new ProductPage()
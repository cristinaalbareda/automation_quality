import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import ProductPage from '../pages/PDP'


Given("I acess the PDP", () => {
    ProductPage.accessProductPage()
})

When("I check the elements on PDP", () => {
    ProductPage.checkImage()
    ProductPage.checkQty()
    ProductPage.checkBtnAddCart()
    ProductPage.checkReviewName()
    ProductPage.checkReviewEmail()
    ProductPage.checkReviewText()
})

Then("all the elements must be correct", () => {
    //
})
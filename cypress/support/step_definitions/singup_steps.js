import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import SingupPage from '../pages/Singup'


Given("I acess the Login page", () => {
    SingupPage.accessPage()
})

When("I type a name and email", () => {
    SingupPage.typeName()
    SingupPage.typeEmail()
    SingupPage.clickBtnSingup()
})

And("I fill all the information correctly", () => {
    //selecionar titulo (radio)
    SingupPage.typePassword()
    //selecionar data de nascimento (dropdown)
    //selecionar box de newsletter (checkbox)
    //selecionar box de ofertas (checkbox)
    SingupPage.typeFirstName()
    SingupPage.typeLastName()
    SingupPage.typeCompany()
    SingupPage.typeAddress()
    SingupPage.typeAdsress2()
    //selecionar pais (bropdown)
    SingupPage.typeState()
    SingupPage.typeCity()
    SingupPage.typeZipcode()
    SingupPage.typeMobileNumber()
})

And("click on create account", () => {
    //SingupPage.clickBtnCreateAccount()
})

Then("it must create the new account", () => {
    //Não vamos fazer mas poderia ser a msg
    //não vamos verificar isso mas podemos via API
})
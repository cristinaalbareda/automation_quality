Feature: Singup scenarios
    @focus
    Scenario: Create account
        #Ir para a página de cadastro
        Given I acess the Login page
        When I type a name and email
        And I fill all the information correctly
        And click on create account
        Then it must create the new account
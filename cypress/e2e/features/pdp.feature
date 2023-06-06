Feature: PDP scenarios
    @focus
    Scenario: Check elements on PDP
        #Checar os elementos na página de produto
        Given I acess the PDP
        When I check the elements on PDP
        Then all the elements must be correct
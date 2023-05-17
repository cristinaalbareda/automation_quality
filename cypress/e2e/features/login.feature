Feature: Login scenarios

    Scenario: Login with wrong information
        #Login com dados de acesso inválidos
        Given I acess the homepage
        When I type a wrong user and password
        Then it must show a message error




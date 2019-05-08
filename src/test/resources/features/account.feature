Feature: Create, Update and Delete of Account

  @delete_account
  Scenario: Create a new account in Pivotal Tracker
    Given I log with Username and Password into the Pivotal Tracker
    When I create a new account "New Account" in Pivotal Tracker
    Then I should see in the accounts page the account created

#  @delete_account
#  Scenario: Configure the account name of an account created
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    When I configure the account Name and save the changes
#    Then I should see the change in the Account name
#
#  Scenario: Delete a account in Pivotal Tracker
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    When I enter to the Settings and delete the account
#    Then I should see a yellow message "name_of_account was successfully deleted."
#    And I should see all of the accounts except the deleted account
#
#  @delete_account
#  Scenario Outline: Add member to the account of Pivotal Tracker
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    When I add a Member <member> to the account and assign a Account Role "<Role>" with permission of project creator
#    Then I should see the member that was added and message of confirmation
#
#    Examples:
#      |member	|Role|
#      |LuisG|Member|
#      |RaulR	|Admin|
#      |EnriqueQ|Owner|
#
#  @delete_account
#  Scenario: Delete member of an account Pivotal Tracker
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    And I add a new member into the created account
#    When I delete a member from Pivotal Tracker account
#    Then I should see a yellow message "name_of_member has been removed from your account"
#
#
#  @delete_account
#  Scenario Outline: Add member to the account of Pivotal Tracker
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    When I add a Member <member> to the account and assign a Account Role "<Role>" with permission of project creator
#    Then I should see the member that was added and message of confirmation
#
#    Examples:
#      |member	|Role|
#      |LuisG|Member|
#      |RaulR	|Admin|
#      |EnriqueQ|Owner|
#
#  @delete_account
#  Scenario Outline: Change Role of a member of an account of Pivotal Tracker
#    Given I am logged in to the Pivotal Tracker web page
#    And I create a new account
#    And I add a new member into the created account
#    When I update an Account Role <Role>
#    Then I should see the member has changed his Account Role to <role>
#
#    Examples:
#      |Role|
#      |Member|
#      |Admin|
#      |Owner|
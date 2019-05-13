Feature: Create, Update and Delete of Account
  Background:
    Given I am logged in with Username and Password into the Pivotal Tracker

  @deleteAccount
  Scenario: Create a new account in Pivotal Tracker
    When I create a new account "New Account" in Pivotal Tracker
    Then I should see the new account page
    When I navigate to Account page
    Then I should see the new account in the Accounts page
    When I navigate to Dashboard page
    Then I should see the new account in the Project Creation popup

#  @deleteAccount
#  Scenario: Configure the account name of an account created
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I configure the account Name "Change Name" and save the changes
#    Then I should see the new account page
#    When I navigate to Account page
#    Then I should see the new account in the Accounts page
#
#  Scenario: Delete a account in Pivotal Tracker
#    And I create a new account "New Account" in Pivotal Tracker
#    When I enter to the Settings and delete the account with name "New Account"
#    Then I should see a yellow message "New Account was successfully deleted." in Accounts Page
#    And I should see all of the accounts except the deleted account
#  TODO HACER ESTO FALTA ESTE METODO

#  @deleteAccount
#  Scenario Outline: Add member to the account of Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<Role>" with permission of project creator
#    Then I should see message of confirmation "Updated member '<nameMember>'" in the Membership Page of Account
#    And I should see the member that was added in the table of the Membership Page of Account
#
#    Examples:
#      |nameMember|memberEmail	|Role|
#      |gluisalberto68|g.luisalberto68@gmail.com|Member|
#      |cxristianlujan05|cxristian.lujan05@gmail.com	|Admin|
#      |apitestingautomation|api.testing.automation@gmail.com|Owner|


#  @deleteAccount
#  Scenario Outline: Add member to the account of Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<Role>" without permission of project creator
#    Then I should see message of confirmation "Updated member '<nameMember>'" in the Membership Page of Account
#    And I should see the member that was added in the table of the Membership Page of Account
#
#    Examples:
#      |nameMember|memberEmail	|Role|
#      |gluisalberto68|g.luisalberto68@gmail.com|Member|
#      |cxristianlujan05|cxristian.lujan05@gmail.com	|Admin|
#      |apitestingautomation|api.testing.automation@gmail.com|Owner|

#  @deleteAccount
#  Scenario Outline: Delete member of an account Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    And I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<Role>" with permission of project creator
#    When I delete the member "<nameMember>" from Pivotal Tracker account in the Account Memberships
#    Then I should not see the member of account in the table of the Membership Page of Account
#    Then I should see message of confirmation "'<nameMember>' has been removed from your account" in the Membership Page of Account
#
#    Examples:
#      |nameMember|memberEmail	|Role|
#      |gluisalberto68|g.luisalberto68@gmail.com|Member|
#      |cxristianlujan05|cxristian.lujan05@gmail.com	|Admin|

#  @deleteAccount
#  Scenario Outline: Change Role of a member of an account of Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    And I add a Member "gluisalberto68", "g.luisalberto68@gmail.com" to the account and assign a Account Role "Member" with permission of project creator
#    When I update an Account Role <Role> of the member
#    Then I should see the member has changed his Account Role to <role>
#
#    Examples:
#      |Role|
#      |Admin|
#      |Owner|
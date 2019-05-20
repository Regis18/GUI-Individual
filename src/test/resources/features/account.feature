Feature: Create, Update and Delete of Account
  Background:
    Given I am logged in with Username and Password into the Pivotal Tracker

  @deleteAccount
  Scenario: Create a new account in Pivotal Tracker
    When I create a new account "New Account" in Pivotal Tracker
    Then I should see the new Account Page
    When I navigate to Account page
    Then I should see the new account in the Accounts page
    When I navigate to Dashboard page
    Then I should see the new account in the Project Creation popup
#
#  @deleteAccount
#  Scenario: Configure the account name of an account created
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I update the account Name with "Change Name"
#    Then I should see the new account page
#    When I navigate to Account page
#    Then I should see the new account in the Accounts page
#
#  Scenario: Delete a account in Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I navigate to the Settings Tab in Account Page
#    And I delete the account that was created
#    Then I should see a yellow message "New Account was successfully deleted." in Accounts Page
#    And I should see all of the accounts except the deleted account
#
#  @deleteAccount
#  Scenario Outline: Add member to the account of Pivotal Tracker with permission of Project Creator
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<role>" with permission of project creator
#    Then I should see message of confirmation "Updated member '<nameMember>'" in the Membership Page of Account
#    And I should see the member that was added in the table of the Membership Page of Account
#
#    Examples:
#      |nameMember     |memberEmail	              |role   |
#      |enriquehumana  |enrique.humana@gmail.com   |Member |
#      |testat09gui    |test.at09.gui@gmail.com    |Admin  |
#      |uitesting_0209 |uitesting_0209@outlook.com |Owner  |
#
#
#  @deleteAccount
#  Scenario Outline: Add member to the account of Pivotal Tracker without permission of Project Creator
#    Given I create a new account "New Account" in Pivotal Tracker
#    When I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<role>" without permission of project creator
#    Then I should see message of confirmation "Updated member '<nameMember>'" in the Membership Page of Account
#    And I should see the member that was added in the table of the Membership Page of Account
#
#    Examples:
#      |nameMember     |memberEmail	              |role   |
#      |enriquehumana  |enrique.humana@gmail.com   |Member |
#      |testat09gui    |test.at09.gui@gmail.com    |Admin  |
#      |uitesting_0209 |uitesting_0209@outlook.com |Owner  |
#
#  @deleteAccount
#  Scenario Outline: Delete member of an account Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    And I add a Member "<nameMember>", "<memberEmail>" to the account and assign a Account Role "<role>" with permission of project creator
#    When I delete the member "<nameMember>" from Pivotal Tracker account in the Account Memberships
#    Then I should not see the member of account in the table of the Membership Page of Account
#
#    Examples:
#      |nameMember     |memberEmail	            |role   |
#      |enriquehumana  |enrique.humana@gmail.com |Member |
#      |testat09gui    |test.at09.gui@gmail.com  |Admin  |
#
#  @deleteAccount
#  Scenario Outline: Change Role of a member of an account of Pivotal Tracker
#    Given I create a new account "New Account" in Pivotal Tracker
#    And I add a Member "enriquehumana", "enrique.humana@gmail.com" to the account and assign a Account Role "Member" with permission of project creator
#    When I update an Account Role "<role>" of the member
#    Then I verify the Member Role has changed his Account Role to "<role>"
#    And I should see message of confirmation "Updated member 'enriquehumana'" in the Membership Page of Account
#
#    Examples:
#      |role |
#      |Admin|
#      |Owner|
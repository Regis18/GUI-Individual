Feature: Create, Update and Delete of Account

	@delete_account
	Scenario: Create a new account in Pivotal Tracker
		Given I am logged in to the Pivotal Tracker web page
		When I create a new account in Pivotal Tracker
		Then I should see in the accounts page the account created

#	@delete_account
#	Scenario: Configure the account name of an account created
#		Given I am logged in to the Pivotal Tracker web page
#		And I create a new account
#		When I configure the account Name and save the changes
#		Then I should see the change in the Account name
#
#	Scenario: Delete a account in Pivotal Tracker
#		Given I am logged in to the Pivotal Tracker web page
#		And I create a new account
#		When I enter to the Settings and delete the account
#		Then I should see a yellow message "name_of_account was successfully deleted."
#		And I should see all of the accounts except the deleted account
#
#	@delete_account
#	Scenario Outline: Add member to the account of Pivotal Tracker
#		Given I am logged in to the Pivotal Tracker web page
#		And I create a new account
#		When I add a Member <member> to the account and assign a Account Role "<Role>"
#		Then I should see the member that was added and message of confirmation
#
#		Examples:
#		|member	|Role|
#		|LuisG|Member|
#		|RaulR	|Admin|
#		|EnriqueQ|Owner|
#
#	@delete_account
#	Scenario: Delete member of an account Pivotal Tracker
#		Given I login with username and password to Pivotal Tracker
#		And I access to Account Options and create a new account
#		And I add a new member into the created account
#		And I push the link label "Actions"
#		When I push the page "Remove Member" and push the Remove button
#		Then I should see a yellow message "name_of_member has been removed from your account"
#
#
#	@delete_account
#	Scenario Outline: Add member to the account of Pivotal Tracker
#		Given I login with username and password to Pivotal Tracker
#		And I access to Account Options and create a new account
#		And I access to the account created in the "Accounts Members" page and push Add Member
#		And I write a known profile in Pivotal Tracker, assign a Account Role "<Role>" and without permission of project creator
#		When I push Add
#		Then I should see the member that was added and message of confirmation
#
#		Examples:
#		|Role|
#		|Member|
#		|Admin|
#		|Owner|
#
#	@delete_account
#	Scenario Outline: Change Role of a member of an account of Pivotal Tracker
#		Given I login with username and password to Pivotal Tracker
#		And I access to Account Options and create a new account
#		And I add a new member into the created account
#		And I push the link label "Actions"
#		When I push the page "Change Roles" and select an Account Role <Role>
#		Then I should see the member has changed is Account Role to <role>
#
#		Examples:
#		|Role|
#		|Member|
#		|Admin|
#		|Owner|
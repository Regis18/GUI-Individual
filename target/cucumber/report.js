$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/account.feature");
formatter.feature({
  "line": 1,
  "name": "Create, Update and Delete of Account",
  "description": "",
  "id": "create,-update-and-delete-of-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new account in Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;create-a-new-account-in-pivotal-tracker",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I log with Username and Password into the Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see the new account in the Accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 20807126118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 24
    }
  ],
  "location": "AccountsSteps.createANewAccountInPivotalTracker(String)"
});
formatter.result({
  "duration": 4871014010,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 34500351,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 2592726775,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Configure the account name of an account created",
  "description": "",
  "id": "create,-update-and-delete-of-account;configure-the-account-name-of-an-account-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    Given I log with Username and Password into the Pivotal Tracker"
    },
    {
      "line": 11,
      "value": "#    And I create a new account \"New Account\" in Pivotal Tracker"
    }
  ],
  "line": 12,
  "name": "I configure the account Name \"Change Name\" and save the changes",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the new account in the Accounts page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Change Name",
      "offset": 30
    }
  ],
  "location": "AccountsSteps.configureTheAccountNameAndSaveTheChanges(String)"
});
formatter.result({
  "duration": 1295092027,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 1154616,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.AccountsSteps.seeInTheAccountsPageTheAccountCreated(AccountsSteps.java:39)\r\n\tat ✽.Then I should see the new account page(src/test/resources/features/account.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "status": "skipped"
});
});
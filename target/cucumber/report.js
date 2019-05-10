$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/account.feature");
formatter.feature({
  "line": 1,
  "name": "Create, Update and Delete of Account",
  "description": "",
  "id": "create,-update-and-delete-of-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am logged in with Username and Password into the Pivotal Tracker",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 15362057183,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new account in Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;create-a-new-account-in-pivotal-tracker",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to Account page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the new account in the Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the new account in the Project Creation popup",
  "keyword": "Then "
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
  "duration": 5303576315,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 44543798,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1349823387,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 120642822,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToDashboardPage()"
});
formatter.result({
  "duration": 862170079,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheProjectCreationPopup()"
});
formatter.result({
  "duration": 804246848,
  "status": "passed"
});
formatter.after({
  "duration": 3138423907,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am logged in with Username and Password into the Pivotal Tracker",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 5512222,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Configure the account name of an account created",
  "description": "",
  "id": "create,-update-and-delete-of-account;configure-the-account-name-of-an-account-created",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I configure the account Name \"Change Name\" and save the changes",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I navigate to Account page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the new account in the Accounts page",
  "keyword": "Then "
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
  "duration": 3956060023,
  "status": "passed"
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
  "duration": 2232732506,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 33746430,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1447048459,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 138562460,
  "status": "passed"
});
formatter.after({
  "duration": 3148389097,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am logged in with Username and Password into the Pivotal Tracker",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 4868203,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Delete a account in Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-a-account-in-pivotal-tracker",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter to the Settings and delete the account with name \"New Account\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should see a yellow message \"New Account was successfully deleted.\"",
  "keyword": "Then "
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
  "duration": 3967861480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 58
    }
  ],
  "location": "AccountsSteps.enterToTheSettingsAndDeleteTheAccountWithName(String)"
});
formatter.result({
  "duration": 3572425634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account was successfully deleted.",
      "offset": 31
    }
  ],
  "location": "AccountsSteps.seeAYellowMessage(String)"
});
formatter.result({
  "duration": 51928209,
  "status": "passed"
});
});
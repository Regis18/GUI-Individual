$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/account.feature");
formatter.feature({
  "line": 1,
  "name": "Create, Update and Delete of Account",
  "description": "",
  "id": "create,-update-and-delete-of-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create a new account in Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;create-a-new-account-in-pivotal-tracker",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@delete_account"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I log with Username and Password into the Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a new account in Pivotal Tracker",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see in the accounts page the account created",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 68794727600,
  "status": "passed"
});
formatter.match({
  "location": "projectSteps.createANewAccountInPivotalTracker()"
});
formatter.result({
  "duration": 303800,
  "status": "passed"
});
formatter.match({
  "location": "projectSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 157152800,
  "status": "passed"
});
});
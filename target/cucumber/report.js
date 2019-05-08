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
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the new account in the Accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.logIn()"
});
formatter.result({
  "duration": 35305467300,
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
  "duration": 1712436700,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 2595140600,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.iShouldSeeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 2169522200,
  "status": "passed"
});
});
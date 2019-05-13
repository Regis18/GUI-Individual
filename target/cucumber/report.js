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
  "duration": 46515342707,
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
  "duration": 4518207437,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 84011991,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1534108209,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 418657310,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToDashboardPage()"
});
formatter.result({
  "duration": 836746293,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheProjectCreationPopup()"
});
formatter.result({
  "duration": 746519047,
  "status": "passed"
});
formatter.after({
  "duration": 3233026719,
  "status": "passed"
});
});
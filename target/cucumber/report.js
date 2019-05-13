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
  "duration": 29656082500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#  @deleteAccount"
    },
    {
      "line": 6,
      "value": "#  Scenario: Create a new account in Pivotal Tracker"
    },
    {
      "line": 7,
      "value": "#    When I create a new account \"New Account\" in Pivotal Tracker"
    },
    {
      "line": 8,
      "value": "#    Then I should see the new account page"
    },
    {
      "line": 9,
      "value": "#    When I navigate to Account page"
    },
    {
      "line": 10,
      "value": "#    Then I should see the new account in the Accounts page"
    },
    {
      "line": 11,
      "value": "#    When I navigate to Dashboard page"
    },
    {
      "line": 12,
      "value": "#    Then I should see the new account in the Project Creation popup"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#  @deleteAccount"
    },
    {
      "line": 15,
      "value": "#  Scenario: Configure the account name of an account created"
    },
    {
      "line": 16,
      "value": "#    Given I create a new account \"New Account\" in Pivotal Tracker"
    },
    {
      "line": 17,
      "value": "#    When I configure the account Name \"Change Name\" and save the changes"
    },
    {
      "line": 18,
      "value": "#    Then I should see the new account page"
    },
    {
      "line": 19,
      "value": "#    When I navigate to Account page"
    },
    {
      "line": 20,
      "value": "#    Then I should see the new account in the Accounts page"
    },
    {
      "line": 21,
      "value": "#"
    }
  ],
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
  "name": "I should see a yellow message \"New Account was successfully deleted.\" in Accounts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see all of the accounts except the deleted account",
  "keyword": "And "
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
  "duration": 9605968700,
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
  "duration": 2897894500,
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
  "duration": 57714600,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.iShouldSeeAllOfTheAccountsExceptTheDeletedAccount()"
});
formatter.result({
  "duration": 166271200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "##  TODO HACER ESTO FALTA ESTE METODO"
    },
    {
      "line": 28,
      "value": "#"
    },
    {
      "line": 29,
      "value": "#  @deleteAccount"
    },
    {
      "line": 30,
      "value": "#  Scenario Outline: Add member to the account of Pivotal Tracker"
    },
    {
      "line": 31,
      "value": "#    Given I create a new account \"New Account\" in Pivotal Tracker"
    },
    {
      "line": 32,
      "value": "#    When I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" with permission of project creator"
    },
    {
      "line": 33,
      "value": "#    Then I should see message of confirmation \"Updated member \u0027\u003cnameMember\u003e\u0027\" in the Membership Page of Account"
    },
    {
      "line": 34,
      "value": "#    And I should see the member that was added in the table of the Membership Page of Account"
    },
    {
      "line": 35,
      "value": "#"
    },
    {
      "line": 36,
      "value": "#    Examples:"
    },
    {
      "line": 37,
      "value": "#      |nameMember|memberEmail\t|Role|"
    },
    {
      "line": 38,
      "value": "#      |gluisalberto68|g.luisalberto68@gmail.com|Member|"
    },
    {
      "line": 39,
      "value": "#      |cxristianlujan05|cxristian.lujan05@gmail.com\t|Admin|"
    },
    {
      "line": 40,
      "value": "#      |apitestingautomation|api.testing.automation@gmail.com|Owner|"
    },
    {
      "line": 42,
      "value": "#"
    },
    {
      "line": 43,
      "value": "#  @deleteAccount"
    },
    {
      "line": 44,
      "value": "#  Scenario Outline: Add member to the account of Pivotal Tracker"
    },
    {
      "line": 45,
      "value": "#    Given I create a new account \"New Account\" in Pivotal Tracker"
    },
    {
      "line": 46,
      "value": "#    When I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" without permission of project creator"
    },
    {
      "line": 47,
      "value": "#    Then I should see message of confirmation \"Updated member \u0027\u003cnameMember\u003e\u0027\" in the Membership Page of Account"
    },
    {
      "line": 48,
      "value": "#    And I should see the member that was added in the table of the Membership Page of Account"
    },
    {
      "line": 49,
      "value": "#"
    },
    {
      "line": 50,
      "value": "#    Examples:"
    },
    {
      "line": 51,
      "value": "#      |nameMember|memberEmail\t|Role|"
    },
    {
      "line": 52,
      "value": "#      |gluisalberto68|g.luisalberto68@gmail.com|Member|"
    },
    {
      "line": 53,
      "value": "#      |cxristianlujan05|cxristian.lujan05@gmail.com\t|Admin|"
    },
    {
      "line": 54,
      "value": "#      |apitestingautomation|api.testing.automation@gmail.com|Owner|"
    }
  ],
  "line": 57,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I delete the member \"\u003cnameMember\u003e\" from Pivotal Tracker account in the Account Memberships",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I should not see the member of account in the table of the Membership Page of Account",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 62,
      "value": "#    Then I should see message of confirmation \"\u0027\u003cnameMember\u003e\u0027 has been removed from your account\" in the Membership Page of Account"
    }
  ],
  "line": 64,
  "name": "",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;",
  "rows": [
    {
      "cells": [
        "nameMember",
        "memberEmail",
        "Role"
      ],
      "line": 65,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;1"
    },
    {
      "cells": [
        "gluisalberto68",
        "g.luisalberto68@gmail.com",
        "Member"
      ],
      "line": 66,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;2"
    },
    {
      "cells": [
        "cxristianlujan05",
        "cxristian.lujan05@gmail.com",
        "Admin"
      ],
      "line": 67,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 11848100,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I delete the member \"gluisalberto68\" from Pivotal Tracker account in the Account Memberships",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I should not see the member of account in the table of the Membership Page of Account",
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
  "duration": 3690098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gluisalberto68",
      "offset": 16
    },
    {
      "val": "g.luisalberto68@gmail.com",
      "offset": 34
    },
    {
      "val": "Member",
      "offset": 103
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1613152800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gluisalberto68",
      "offset": 21
    }
  ],
  "location": "AccountsSteps.deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String)"
});
formatter.result({
  "duration": 1393393600,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 113781200,
  "status": "passed"
});
formatter.after({
  "duration": 3206679000,
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
  "duration": 6220500,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I add a Member \"cxristianlujan05\", \"cxristian.lujan05@gmail.com\" to the account and assign a Account Role \"Admin\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I delete the member \"cxristianlujan05\" from Pivotal Tracker account in the Account Memberships",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I should not see the member of account in the table of the Membership Page of Account",
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
  "duration": 3759103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cxristianlujan05",
      "offset": 16
    },
    {
      "val": "cxristian.lujan05@gmail.com",
      "offset": 36
    },
    {
      "val": "Admin",
      "offset": 107
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1429889500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cxristianlujan05",
      "offset": 21
    }
  ],
  "location": "AccountsSteps.deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String)"
});
formatter.result({
  "duration": 866554500,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 110383900,
  "status": "passed"
});
formatter.after({
  "duration": 2841551000,
  "status": "passed"
});
});
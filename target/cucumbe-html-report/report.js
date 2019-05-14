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
  "duration": 18805409340,
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
  "duration": 3440780317,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 37002494,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1224265182,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 149681176,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToDashboardPage()"
});
formatter.result({
  "duration": 658903362,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheProjectCreationPopup()"
});
formatter.result({
  "duration": 672735250,
  "status": "passed"
});
formatter.after({
  "duration": 2908299860,
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
  "duration": 6041643,
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
  "duration": 4003832046,
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
  "duration": 2407755266,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 33867921,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1610222555,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 127716933,
  "status": "passed"
});
formatter.after({
  "duration": 3781192737,
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
  "duration": 5203904,
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
  "duration": 3477789652,
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
  "duration": 3443457746,
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
  "duration": 28486122,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeAllOfTheAccountsExceptTheDeletedAccount()"
});
formatter.result({
  "duration": 79750705,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" with permission of project creator",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027\u003cnameMember\u003e\u0027\" in the Membership Page of Account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;",
  "rows": [
    {
      "cells": [
        "nameMember",
        "memberEmail",
        "Role"
      ],
      "line": 36,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;1"
    },
    {
      "cells": [
        "gluisalberto68",
        "g.luisalberto68@gmail.com",
        "Member"
      ],
      "line": 37,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "cxristianlujan05",
        "cxristian.lujan05@gmail.com",
        "Admin"
      ],
      "line": 38,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3"
    },
    {
      "cells": [
        "apitestingautomation",
        "api.testing.automation@gmail.com",
        "Owner"
      ],
      "line": 39,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;4"
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
  "duration": 20050573,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027gluisalberto68\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 4743734383,
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
  "duration": 1290924664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027gluisalberto68\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 475189624,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 43318250,
  "status": "passed"
});
formatter.after({
  "duration": 2809438955,
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
  "duration": 4075799,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I add a Member \"cxristianlujan05\", \"cxristian.lujan05@gmail.com\" to the account and assign a Account Role \"Admin\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027cxristianlujan05\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 3204031582,
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
  "duration": 1539346580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027cxristianlujan05\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 1139813046,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 41707773,
  "status": "passed"
});
formatter.after({
  "duration": 2891779851,
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
  "duration": 4362743,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I add a Member \"apitestingautomation\", \"api.testing.automation@gmail.com\" to the account and assign a Account Role \"Owner\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027apitestingautomation\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 3353691803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apitestingautomation",
      "offset": 16
    },
    {
      "val": "api.testing.automation@gmail.com",
      "offset": 40
    },
    {
      "val": "Owner",
      "offset": 116
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 31274512420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027apitestingautomation\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 983167817,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 45151526,
  "status": "passed"
});
formatter.after({
  "duration": 3336235272,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" without permission of project creator",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027\u003cnameMember\u003e\u0027\" in the Membership Page of Account",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;",
  "rows": [
    {
      "cells": [
        "nameMember",
        "memberEmail",
        "Role"
      ],
      "line": 50,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;1"
    },
    {
      "cells": [
        "gluisalberto68",
        "g.luisalberto68@gmail.com",
        "Member"
      ],
      "line": 51,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "cxristianlujan05",
        "cxristian.lujan05@gmail.com",
        "Admin"
      ],
      "line": 52,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3"
    },
    {
      "cells": [
        "apitestingautomation",
        "api.testing.automation@gmail.com",
        "Owner"
      ],
      "line": 53,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;4"
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
  "duration": 5009756,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027gluisalberto68\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 3144389607,
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
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 1154524582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027gluisalberto68\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 1246163998,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 30035365503,
  "status": "passed"
});
formatter.after({
  "duration": 8817721838,
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
  "duration": 5273608,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I add a Member \"cxristianlujan05\", \"cxristian.lujan05@gmail.com\" to the account and assign a Account Role \"Admin\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027cxristianlujan05\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 3294566841,
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
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 1191659642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027cxristianlujan05\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 508660271,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 45513734,
  "status": "passed"
});
formatter.after({
  "duration": 2822351426,
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
  "duration": 4216064,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Add member to the account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I add a Member \"apitestingautomation\", \"api.testing.automation@gmail.com\" to the account and assign a Account Role \"Owner\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027apitestingautomation\u0027\" in the Membership Page of Account",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should see the member that was added in the table of the Membership Page of Account",
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
  "duration": 5812641093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apitestingautomation",
      "offset": 16
    },
    {
      "val": "api.testing.automation@gmail.com",
      "offset": 40
    },
    {
      "val": "Owner",
      "offset": 116
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 31132102340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027apitestingautomation\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 1112069729,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 59157890,
  "status": "passed"
});
formatter.after({
  "duration": 3153307102,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I add a Member \"\u003cnameMember\u003e\", \"\u003cmemberEmail\u003e\" to the account and assign a Account Role \"\u003cRole\u003e\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I delete the member \"\u003cnameMember\u003e\" from Pivotal Tracker account in the Account Memberships",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I should not see the member of account in the table of the Membership Page of Account",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 61,
      "value": "#    Then I should see message of confirmation \"\u0027\u003cnameMember\u003e\u0027 has been removed from your account\" in the Membership Page of Account"
    }
  ],
  "line": 63,
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
      "line": 64,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;1"
    },
    {
      "cells": [
        "gluisalberto68",
        "g.luisalberto68@gmail.com",
        "Member"
      ],
      "line": 65,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;2"
    },
    {
      "cells": [
        "cxristianlujan05",
        "cxristian.lujan05@gmail.com",
        "Admin"
      ],
      "line": 66,
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
  "duration": 7063265,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I delete the member \"gluisalberto68\" from Pivotal Tracker account in the Account Memberships",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
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
  "duration": 3277632025,
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
  "duration": 1272807435,
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
  "duration": 1446833932,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 73566232,
  "status": "passed"
});
formatter.after({
  "duration": 3559884658,
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
  "duration": 4369158,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Delete member of an account Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I add a Member \"cxristianlujan05\", \"cxristian.lujan05@gmail.com\" to the account and assign a Account Role \"Admin\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I delete the member \"cxristianlujan05\" from Pivotal Tracker account in the Account Memberships",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
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
  "duration": 3402148957,
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
  "duration": 1166100263,
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
  "duration": 1180086955,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 73534587,
  "status": "passed"
});
formatter.after({
  "duration": 2970906635,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 69,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 68,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I update an Account Role \"\u003cRole\u003e\" of the member",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I verify the Member Role has changed his Account Role to \"\u003cRole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I should see message of confirmation \"Updated member \u0027gluisalberto68\u0027\" in the Membership Page of Account",
  "keyword": "And "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;",
  "rows": [
    {
      "cells": [
        "Role"
      ],
      "line": 77,
      "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;1"
    },
    {
      "cells": [
        "Admin"
      ],
      "line": 78,
      "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "Owner"
      ],
      "line": 79,
      "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;3"
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
  "duration": 3718295,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 68,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I update an Account Role \"Admin\" of the member",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I verify the Member Role has changed his Account Role to \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I should see message of confirmation \"Updated member \u0027gluisalberto68\u0027\" in the Membership Page of Account",
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
  "duration": 3142964296,
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
  "duration": 1174136400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 26
    }
  ],
  "location": "AccountsSteps.updateAnAccountRoleOfTheMember(String)"
});
formatter.result({
  "duration": 3058656701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 58
    }
  ],
  "location": "AccountsSteps.verifyTheMemberRoleHasChangedHisAccountRoleTo(String)"
});
formatter.result({
  "duration": 286650442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027gluisalberto68\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 24276899,
  "status": "passed"
});
formatter.after({
  "duration": 3399761892,
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
  "duration": 3610103,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 68,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I add a Member \"gluisalberto68\", \"g.luisalberto68@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I update an Account Role \"Owner\" of the member",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I verify the Member Role has changed his Account Role to \"Owner\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I should see message of confirmation \"Updated member \u0027gluisalberto68\u0027\" in the Membership Page of Account",
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
  "duration": 3571387640,
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
  "duration": 1083608411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Owner",
      "offset": 26
    }
  ],
  "location": "AccountsSteps.updateAnAccountRoleOfTheMember(String)"
});
formatter.result({
  "duration": 1143835391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Owner",
      "offset": 58
    }
  ],
  "location": "AccountsSteps.verifyTheMemberRoleHasChangedHisAccountRoleTo(String)"
});
formatter.result({
  "duration": 344080255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027gluisalberto68\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 24857201,
  "status": "passed"
});
formatter.after({
  "duration": 2731255963,
  "status": "passed"
});
});
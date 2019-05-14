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
  "duration": 38819630100,
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
  "duration": 8360650301,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 38682400,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1445480100,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 175776801,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToDashboardPage()"
});
formatter.result({
  "duration": 783869401,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheProjectCreationPopup()"
});
formatter.result({
  "duration": 3983540300,
  "status": "passed"
});
formatter.after({
  "duration": 2928619500,
  "status": "passed"
});
formatter.after({
  "duration": 110601,
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
  "duration": 6480299,
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
  "duration": 3914093400,
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
  "duration": 3408753700,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "duration": 35095200,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.navigateToAccountPage()"
});
formatter.result({
  "duration": 1504379100,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheNewAccountInTheAccountsPage()"
});
formatter.result({
  "duration": 175368599,
  "status": "passed"
});
formatter.after({
  "duration": 2664005200,
  "status": "passed"
});
formatter.after({
  "duration": 64000,
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
  "duration": 6197800,
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
  "duration": 3466197800,
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
  "duration": 2898775499,
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
  "duration": 36223501,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.iShouldSeeAllOfTheAccountsExceptTheDeletedAccount()"
});
formatter.result({
  "duration": 543583400,
  "status": "passed"
});
formatter.after({
  "duration": 1617400,
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
        "enriquehumana",
        "enrique.humana@gmail.com",
        "Member"
      ],
      "line": 37,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "testat09gui",
        "test.at09.gui@gmail.com",
        "Admin"
      ],
      "line": 38,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3"
    },
    {
      "cells": [
        "uitesting_0209",
        "uitesting_0209@outlook.com",
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
  "duration": 6279801,
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
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027enriquehumana\u0027\" in the Membership Page of Account",
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
  "duration": 3431376999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 16
    },
    {
      "val": "enrique.humana@gmail.com",
      "offset": 33
    },
    {
      "val": "Member",
      "offset": 101
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 4709873299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027enriquehumana\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 484671800,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 89314700,
  "status": "passed"
});
formatter.after({
  "duration": 2618429800,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
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
  "duration": 7614700,
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
  "name": "I add a Member \"testat09gui\", \"test.at09.gui@gmail.com\" to the account and assign a Account Role \"Admin\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027testat09gui\u0027\" in the Membership Page of Account",
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
  "duration": 3471096399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testat09gui",
      "offset": 16
    },
    {
      "val": "test.at09.gui@gmail.com",
      "offset": 31
    },
    {
      "val": "Admin",
      "offset": 98
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1341771899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027testat09gui\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 498312301,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 60779001,
  "status": "passed"
});
formatter.after({
  "duration": 2768982000,
  "status": "passed"
});
formatter.after({
  "duration": 43600,
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
  "duration": 7896899,
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
  "name": "I add a Member \"uitesting_0209\", \"uitesting_0209@outlook.com\" to the account and assign a Account Role \"Owner\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see message of confirmation \"Updated member \u0027uitesting_0209\u0027\" in the Membership Page of Account",
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
  "duration": 3609403300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uitesting_0209",
      "offset": 16
    },
    {
      "val": "uitesting_0209@outlook.com",
      "offset": 34
    },
    {
      "val": "Owner",
      "offset": 104
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 3010065600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027uitesting_0209\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 646198999,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 66514000,
  "status": "passed"
});
formatter.after({
  "duration": 5020224000,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
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
        "enriquehumana",
        "enrique.humana@gmail.com",
        "Member"
      ],
      "line": 51,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "testat09gui",
        "test.at09.gui@gmail.com",
        "Admin"
      ],
      "line": 52,
      "id": "create,-update-and-delete-of-account;add-member-to-the-account-of-pivotal-tracker;;3"
    },
    {
      "cells": [
        "uitesting_0209",
        "uitesting_0209@outlook.com",
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
  "duration": 6739000,
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
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027enriquehumana\u0027\" in the Membership Page of Account",
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
  "duration": 3598926900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 16
    },
    {
      "val": "enrique.humana@gmail.com",
      "offset": 33
    },
    {
      "val": "Member",
      "offset": 101
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 1165865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027enriquehumana\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 420375500,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 30044962599,
  "status": "passed"
});
formatter.after({
  "duration": 3413219701,
  "status": "passed"
});
formatter.after({
  "duration": 40500,
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
  "duration": 5779200,
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
  "name": "I add a Member \"testat09gui\", \"test.at09.gui@gmail.com\" to the account and assign a Account Role \"Admin\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027testat09gui\u0027\" in the Membership Page of Account",
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
  "duration": 3493936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testat09gui",
      "offset": 16
    },
    {
      "val": "test.at09.gui@gmail.com",
      "offset": 31
    },
    {
      "val": "Admin",
      "offset": 98
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 1026240799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027testat09gui\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 539359500,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 48883299,
  "status": "passed"
});
formatter.after({
  "duration": 2979742100,
  "status": "passed"
});
formatter.after({
  "duration": 40999,
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
  "duration": 4564800,
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
  "name": "I add a Member \"uitesting_0209\", \"uitesting_0209@outlook.com\" to the account and assign a Account Role \"Owner\" without permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should see message of confirmation \"Updated member \u0027uitesting_0209\u0027\" in the Membership Page of Account",
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
  "duration": 4350062200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uitesting_0209",
      "offset": 16
    },
    {
      "val": "uitesting_0209@outlook.com",
      "offset": 34
    },
    {
      "val": "Owner",
      "offset": 104
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccount(String,String,String)"
});
formatter.result({
  "duration": 1064055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027uitesting_0209\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 554336000,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 46488199,
  "status": "passed"
});
formatter.after({
  "duration": 4405894501,
  "status": "passed"
});
formatter.after({
  "duration": 49901,
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
  "line": 62,
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
      "line": 63,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;1"
    },
    {
      "cells": [
        "enriquehumana",
        "enrique.humana@gmail.com",
        "Member"
      ],
      "line": 64,
      "id": "create,-update-and-delete-of-account;delete-member-of-an-account-pivotal-tracker;;2"
    },
    {
      "cells": [
        "testat09gui",
        "test.at09.gui@gmail.com",
        "Admin"
      ],
      "line": 65,
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
  "duration": 14021101,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
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
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I delete the member \"enriquehumana\" from Pivotal Tracker account in the Account Memberships",
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
  "duration": 3315627400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 16
    },
    {
      "val": "enrique.humana@gmail.com",
      "offset": 33
    },
    {
      "val": "Member",
      "offset": 101
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1240341300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 21
    }
  ],
  "location": "AccountsSteps.deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String)"
});
formatter.result({
  "duration": 1619622300,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 837568201,
  "status": "passed"
});
formatter.after({
  "duration": 3645623000,
  "status": "passed"
});
formatter.after({
  "duration": 47000,
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
  "duration": 12131699,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
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
  "name": "I add a Member \"testat09gui\", \"test.at09.gui@gmail.com\" to the account and assign a Account Role \"Admin\" with permission of project creator",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I delete the member \"testat09gui\" from Pivotal Tracker account in the Account Memberships",
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
  "duration": 3430006200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testat09gui",
      "offset": 16
    },
    {
      "val": "test.at09.gui@gmail.com",
      "offset": 31
    },
    {
      "val": "Admin",
      "offset": 98
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1199018999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testat09gui",
      "offset": 21
    }
  ],
  "location": "AccountsSteps.deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String)"
});
formatter.result({
  "duration": 1862127600,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 924171200,
  "status": "passed"
});
formatter.after({
  "duration": 3604251801,
  "status": "passed"
});
formatter.after({
  "duration": 38599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update an Account Role \"\u003cRole\u003e\" of the member",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I verify the Member Role has changed his Account Role to \"\u003cRole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I should see message of confirmation \"Updated member \u0027enriquehumana\u0027\" in the Membership Page of Account",
  "keyword": "And "
});
formatter.examples({
  "line": 75,
  "name": "",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;",
  "rows": [
    {
      "cells": [
        "Role"
      ],
      "line": 76,
      "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;1"
    },
    {
      "cells": [
        "Admin"
      ],
      "line": 77,
      "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;2"
    },
    {
      "cells": [
        "Owner"
      ],
      "line": 78,
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
  "duration": 4973200,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update an Account Role \"Admin\" of the member",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I verify the Member Role has changed his Account Role to \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I should see message of confirmation \"Updated member \u0027enriquehumana\u0027\" in the Membership Page of Account",
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
  "duration": 3488963000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 16
    },
    {
      "val": "enrique.humana@gmail.com",
      "offset": 33
    },
    {
      "val": "Member",
      "offset": 101
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 3760686499,
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
  "duration": 962234099,
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
  "duration": 385870400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027enriquehumana\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 26519800,
  "status": "passed"
});
formatter.after({
  "duration": 2438284800,
  "status": "passed"
});
formatter.after({
  "duration": 68100,
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
  "duration": 5864999,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Change Role of a member of an account of Pivotal Tracker",
  "description": "",
  "id": "create,-update-and-delete-of-account;change-role-of-a-member-of-an-account-of-pivotal-tracker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@deleteAccount"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I create a new account \"New Account\" in Pivotal Tracker",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I add a Member \"enriquehumana\", \"enrique.humana@gmail.com\" to the account and assign a Account Role \"Member\" with permission of project creator",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update an Account Role \"Owner\" of the member",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I verify the Member Role has changed his Account Role to \"Owner\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I should see message of confirmation \"Updated member \u0027enriquehumana\u0027\" in the Membership Page of Account",
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
  "duration": 5470072500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enriquehumana",
      "offset": 16
    },
    {
      "val": "enrique.humana@gmail.com",
      "offset": 33
    },
    {
      "val": "Member",
      "offset": 101
    }
  ],
  "location": "AccountsSteps.addAMemberToTheAccountWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1124186099,
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
  "duration": 1198463000,
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
  "duration": 389287999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated member \u0027enriquehumana\u0027",
      "offset": 38
    }
  ],
  "location": "AccountsSteps.seeMessageOfConfirmationInTheMembershipPageOfAccount(String)"
});
formatter.result({
  "duration": 27722500,
  "status": "passed"
});
formatter.after({
  "duration": 2514235200,
  "status": "passed"
});
formatter.after({
  "duration": 44300,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/account.feature");
formatter.feature({
  "line": 1,
  "name": "Create, Update and Delete of Account",
  "description": "",
  "id": "create,-update-and-delete-of-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
    },
    {
      "line": 22,
      "value": "#  Scenario: Delete a account in Pivotal Tracker"
    },
    {
      "line": 23,
      "value": "#    And I create a new account \"New Account\" in Pivotal Tracker"
    },
    {
      "line": 24,
      "value": "#    When I enter to the Settings and delete the account with name \"New Account\""
    },
    {
      "line": 25,
      "value": "#    Then I should see a yellow message \"New Account was successfully deleted.\""
    },
    {
      "line": 26,
      "value": "#    And I should see all of the accounts except the deleted account"
    },
    {
      "line": 27,
      "value": "#"
    }
  ],
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
  "duration": 30652634600,
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
  "duration": 5121247000,
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
  "location": "AccountsSteps.addAMemberToTheAccountAndAssignAAccountRoleWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1497510300,
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
  "duration": 490414900,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 111134600,
  "status": "passed"
});
formatter.after({
  "duration": 4383894600,
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
  "duration": 7211500,
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
  "duration": 4275647600,
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
  "location": "AccountsSteps.addAMemberToTheAccountAndAssignAAccountRoleWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1646140400,
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
  "duration": 547804100,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 122639400,
  "status": "passed"
});
formatter.after({
  "duration": 3959682300,
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
  "duration": 5857600,
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
  "duration": 4489871200,
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
  "location": "AccountsSteps.addAMemberToTheAccountAndAssignAAccountRoleWithPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1958632200,
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
  "duration": 603383500,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 92974600,
  "status": "passed"
});
formatter.after({
  "duration": 3741646900,
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
      "name": "@delete_account"
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
  "duration": 5092900,
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
      "name": "@delete_account"
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
  "duration": 4004762200,
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
  "location": "AccountsSteps.iAddAMemberToTheAccountAndAssignAAccountRoleWithoutPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 2171941400,
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
  "duration": 480105900,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 106435800,
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
  "duration": 17540500,
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
      "name": "@delete_account"
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
  "duration": 4857633100,
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
  "location": "AccountsSteps.iAddAMemberToTheAccountAndAssignAAccountRoleWithoutPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 1948490400,
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
  "duration": 726986400,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 147136600,
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
  "duration": 6302500,
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
      "name": "@delete_account"
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
  "duration": 9004638700,
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
  "location": "AccountsSteps.iAddAMemberToTheAccountAndAssignAAccountRoleWithoutPermissionOfProjectCreator(String,String,String)"
});
formatter.result({
  "duration": 2957882400,
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
  "duration": 927684900,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.seeTheMemberThatWasAddedInTheTableOfTheMembershipPageOfAccount()"
});
formatter.result({
  "duration": 124336800,
  "status": "passed"
});
});
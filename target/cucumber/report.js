$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
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
  "name": "I am logged in to the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create a new account in Pivotal Tracker",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see in the accounts page the account created",
  "keyword": "Then "
});
formatter.match({
  "location": "projectSteps.verifyLoginToApplication()"
});
formatter.result({
  "duration": 290053500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat core.selenium.WebDriverManager.initialize(WebDriverManager.java:48)\r\n\tat core.selenium.WebDriverManager.\u003cinit\u003e(WebDriverManager.java:27)\r\n\tat core.selenium.WebDriverManager.getInstance(WebDriverManager.java:37)\r\n\tat steps.projectSteps.verifyLoginToApplication(projectSteps.java:18)\r\n\tat ✽.Given I am logged in to the Application(account.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "projectSteps.iCreateANewAccountInPivotalTracker()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "projectSteps.iShouldSeeInTheAccountsPageTheAccountCreated()"
});
formatter.result({
  "status": "skipped"
});
});
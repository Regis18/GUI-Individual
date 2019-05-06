package steps;

import core.selenium.WebDriverManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;


import static org.testng.AssertJUnit.assertEquals;

public class projectSteps {
    WebDriver driver;

    @Given("^I am logged in to the Pivotal Tracker web page$")
    public void verifyLoginToApplication() {
        driver = WebDriverManager.getInstance().getWebDriver();
        driver.manage().window().maximize();
        driver.get("https://www.google.com");
    }

    @When("^I create a new account in Pivotal Tracker$")
    public void iCreateANewAccountInPivotalTracker() {
        System.out.println("Step WHEN");
    }

    @Then("^I should see in the accounts page the account created$")
    public void iShouldSeeInTheAccountsPageTheAccountCreated() {
        System.out.println("step THEN");
        assertEquals("hey", "hey");
    }
}

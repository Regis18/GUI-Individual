package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;


import static org.testng.AssertJUnit.assertEquals;

public class projectSteps {
    WebDriver driver;

    @When("^I create a new account in Pivotal Tracker$")
    public void createANewAccountInPivotalTracker() {
        System.out.println("Step WHEN");
    }

    @Then("^I should see in the accounts page the account created$")
    public void seeInTheAccountsPageTheAccountCreated() {
        System.out.println("step THEN");
        assertEquals("hey", "hey");
    }
}

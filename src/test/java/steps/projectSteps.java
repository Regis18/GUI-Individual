package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pivotal.ui.AccountsPage;
import pivotal.ui.CreateAccountPopup;
import pivotal.ui.PageTransporter;


import static org.testng.AssertJUnit.assertEquals;

public class projectSteps {
    private AccountsPage accountsPage;
    private CreateAccountPopup accountPopup;
    private PageTransporter pageTransporter = PageTransporter.getInstance();


    @When("^I create a new account \"([^\"]*)\" in Pivotal Tracker$")
    public void createANewAccountInPivotalTracker(final String nameAccount) {
        accountsPage = pageTransporter.navigateToAccountsPage();
        accountsPage.clickNewAccountCreateBtn();
        accountPopup.createNewAccount(nameAccount);
    }

    @Then("^I should see in the accounts page the account created$")
    public void seeInTheAccountsPageTheAccountCreated() {
        System.out.println("step THEN");
        assertEquals("hey", "hey");
    }
}

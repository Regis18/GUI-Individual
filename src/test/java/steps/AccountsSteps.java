package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pivotal.entities.Accounts;
import pivotal.ui.components.AccountBar;
import pivotal.ui.pages.AccountSettingsPage;
import pivotal.ui.pages.AccountsPage;
import pivotal.ui.pages.CreateAccountPopup;
import pivotal.ui.pages.PageTransporter;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;


public class AccountsSteps {
    private AccountsPage accountsPage;
    private CreateAccountPopup accountPopup;
    private AccountBar accountBar;
    private PageTransporter pageTransporter = PageTransporter.getInstance();
    private Accounts account = new Accounts();
    private AccountSettingsPage accountSettingsPage = new AccountSettingsPage();


    @When("^I create a new account \"([^\"]*)\" in Pivotal Tracker$")
    public void createANewAccountInPivotalTracker(final String nameAccount) {
        account.setNameAccount(nameAccount);
        accountsPage = pageTransporter.navigateToAccountsPage();
        accountPopup = accountsPage.clickNewAccountCreateBtn();
        accountBar = accountPopup.createNewAccount(nameAccount);
        account.setUrlSettings(accountSettingsPage.getURLAccountSettings());
    }

    @Then("^I should see the new account page$")
    public void seeInTheAccountsPageTheAccountCreated() {
        assertEquals(accountBar.getNameAccount(),account.getNameAccount(), "The account was created with another name");
    }

    @And("^I should see the new account in the Accounts page$")
    public void seeTheNewAccountInTheAccountsPage() {
        boolean existAccount = accountsPage.verifyAccountInList(account.getNameAccount());
        assertTrue(existAccount,"Don't exist the account in the Account Page");
    }

    @When("^I configure the account Name \"([^\"]*)\" and save the changes$")
    public void configureTheAccountNameAndSaveTheChanges(String nameAccount) {
        account.setNameAccount(nameAccount);
        pageTransporter.navigateToAccountSettingsPage(account.getUrlSettings());
        accountSettingsPage.setNameAccount(nameAccount);
    }

    @When("^I enter to the Settings and delete the account with name \"([^\"]*)\"$")
    public void iEnterToTheSettingsAndDeleteTheAccountWithName(String nameAccount) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I navigate to Account page$")
    public void navigateToAccountPage() {
        accountsPage = pageTransporter.navigateToAccountsPage();
    }

    @After("@deleteAccount")
    public void deleteAccount() {
        System.out.println("Imprimir despues de cada scenario");

    }
    @Before("@ver")
    public void ver() {
        System.out.println("Donde vas");
    }

    @When("^I navigate to Dashboard page$")
    public void iNavigateToDashboardPage() {

    }

    @Then("^I should see the new account in the Project Creation popup$")
    public void iShouldSeeTheNewAccountInTheProjectCreationPopup() {
        pageTransporter.navigateToAccountSettingsPage(account.getUrlSettings());
        accountSettingsPage.deleteAccount();
    }
}

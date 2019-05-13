package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pivotal.entities.Accounts;
import pivotal.ui.components.AccountBar;
import pivotal.ui.pages.AccountMembershipsPage;
import pivotal.ui.pages.AccountSettingsPage;
import pivotal.ui.pages.AccountsPage;
import pivotal.ui.pages.CreateAccountPopup;
import pivotal.ui.pages.CreateProjectPopup;
import pivotal.ui.pages.DashboardPage;
import pivotal.ui.pages.PageTransporter;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;


public class AccountsSteps {
    private AccountsPage accountsPage;
    private CreateAccountPopup accountPopup;
    private AccountBar accountBar;
    private PageTransporter pageTransporter = PageTransporter.getInstance();
    private Accounts account = new Accounts();
    private AccountSettingsPage accountSettingsPage;
    private DashboardPage dashboardPage;
    private CreateProjectPopup createProjectPopup;
    private AccountMembershipsPage accountMembershipsPage;


    @When("^I create a new account \"([^\"]*)\" in Pivotal Tracker$")
    public void createANewAccountInPivotalTracker(final String nameAccount) {
        account.setNameAccount(nameAccount);
        accountsPage = pageTransporter.navigateToAccountsPage();
        accountPopup = accountsPage.clickNewAccountCreateBtn();
        accountBar = accountPopup.createNewAccount(nameAccount);
        accountSettingsPage = new AccountSettingsPage();
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
    public void enterToTheSettingsAndDeleteTheAccountWithName(String nameAccount) {
        accountSettingsPage = pageTransporter.navigateToAccountSettingsPage(account.getUrlSettings());
        accountsPage = accountSettingsPage.deleteAccount();
    }

    @When("^I navigate to Account page$")
    public void navigateToAccountPage() {
        accountsPage = pageTransporter.navigateToAccountsPage();
    }


    @When("^I navigate to Dashboard page$")
    public void navigateToDashboardPage() {
        dashboardPage = pageTransporter.navigateToDashboardPage();
    }

    @Then("^I should see the new account in the Project Creation popup$")
    public void seeTheNewAccountInTheProjectCreationPopup() {
        createProjectPopup = dashboardPage.clickCreateProjectBtn();
        createProjectPopup.verifyAccountInList(account.getNameAccount());
    }


    @Then("^I should see a yellow message \"([^\"]*)\" in Accounts Page$")
    public void seeAYellowMessage(String message) {
        assertEquals(message, accountsPage.getMessageDelete());
    }


    @When("^I add a Member \"([^\"]*)\", \"([^\"]*)\" to the account and assign a Account Role \"([^\"]*)\" with permission of project creator$")
    public void addAMemberToTheAccountWithPermissionOfProjectCreator(String member, String email, String role) {
        account.setNameMember(member);
        account.setRoleMember(role);
        account.setProjectCreator(true);
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(account.getUrlAccountMember());
        accountMembershipsPage.addAccountMember(email, role, true);
    }


    @Then("^I should see message of confirmation \"([^\"]*)\" in the Membership Page of Account$")
    public void seeMessageOfConfirmationInTheMembershipPageOfAccount(String message) {
        assertEquals(accountMembershipsPage.messageConfirmation(), message, "The message is not the correct");
    }

    @And("^I should see the member that was added in the table of the Membership Page of Account$")
    public void seeTheMemberInTheTableOfTheMembershipPageOfAccount() {
        assertTrue(accountMembershipsPage.isMemberInTheList(account.getNameMember(),
                account.getRoleMember(),
                true),
                "The member added is not correct" + account.getNameMember());
    }


    @When("^I add a Member \"([^\"]*)\", \"([^\"]*)\" to the account and assign a Account Role \"([^\"]*)\" without permission of project creator$")
    public void addAMemberToTheAccount(String member, String email, String role) {
        account.setNameMember(member);
        account.setRoleMember(role);
        account.setProjectCreator(true);
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(account.getUrlAccountMember());
        accountMembershipsPage.addAccountMember(email, role, false);
    }

    @When("^I delete the member \"([^\"]*)\" from Pivotal Tracker account in the Account Memberships$")
    public void deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String nameMember) {
        accountMembershipsPage.deleteMember(nameMember);
    }

    @After("@deleteAccount")
    public void deleteAccount() {
        pageTransporter.navigateToAccountSettingsPage(account.getUrlSettings());
        accountSettingsPage.deleteAccount();
    }

    @Then("^I should not see the member of account in the table of the Membership Page of Account$")
    public void seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount() {
        accountMembershipsPage.isNotAddMemberForm();
        assertFalse(accountMembershipsPage.isMemberInTheList(account.getNameMember(),
                account.getRoleMember(),
                true),
                "The member was not deleted " + account.getNameMember());
    }
}

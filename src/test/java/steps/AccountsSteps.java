package steps;

import core.utils.Logs;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import pivotal.entities.Accounts;
import pivotal.entities.Context;
import pivotal.entities.UrlAccounts;
import pivotal.ui.pages.*;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;


public class AccountsSteps {
    private AccountsPage accountsPage;
    private CreateAccountPopup accountPopup;
    private AccountPlansPage accountPlansPage;
    private PageTransporter pageTransporter = PageTransporter.getInstance();
    private Accounts account;
    private UrlAccounts urlAccounts;
    private AccountSettingsPage accountSettingsPage;
    private DashboardPage dashboardPage;
    private CreateProjectPopup createProjectPopup;
    private AccountMembershipsPage accountMembershipsPage;
    private Context context;
    private Logger logs = Logs.getInstance().getLog();

    public AccountsSteps(Context context) {
        this.context = context;
        this.urlAccounts = context.getUrlAccounts();
        this.account = context.getAccounts();
    }

    @When("^I create a new account \"([^\"]*)\" in Pivotal Tracker$")
    public void createANewAccountInPivotalTracker(final String nameAccount) {
        logs.info("Create a new account " + nameAccount + " in Pivotal Tracker");
        account.setNameAccount(nameAccount);
        accountsPage = pageTransporter.navigateToAccountsPage();
        accountPopup = accountsPage.clickNewAccountCreateBtn();
        accountPlansPage = accountPopup.createNewAccount(nameAccount);
        urlAccounts.setUrlSettings(accountPlansPage.getURLAccountSettings());
    }

    @Then("I should see the new Account Page")
    public void seeTheNewAccountPage() {
        logs.info("The Account Page is tested if it owns to the account created");
        assertEquals(accountPlansPage.getAccountBar().getNameAccount(),
                account.getNameAccount(),
                "The account was created with another name");
    }

    @And("^I should see the new account in the Accounts page$")
    public void seeTheNewAccountInTheAccountsPage() {
        logs.info("Verify the account " + account.getNameAccount() + " exists in the Account List");
        boolean existAccount = accountsPage.verifyAccountInList(account.getNameAccount());
        assertTrue(existAccount,"Don't exist the account in the Account Page");
    }

    @When("^I update the account Name with \"([^\"]*)\"$")
    public void configureTheAccountNameAndSaveTheChanges(String nameAccount) {
        logs.info("Update the name " + account.getNameAccount() + " inthe");
        account.setNameAccount(nameAccount);
        pageTransporter.navigateToAccountSettingsPage(urlAccounts.getUrlSettings());
        accountSettingsPage.setNameAccount(nameAccount);
    }

    @When("I navigate to the Settings Tab in Account Page")
    public void iNavigateToTheSettingsTabInAccountPage() {
        accountSettingsPage = pageTransporter.navigateToAccountSettingsPage(urlAccounts.getUrlSettings());
    }

    @And("^I delete the account that was created$")
    public void deleteAccount() {
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
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(urlAccounts.getUrlAccountMember());
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
                account.isProjectCreator()),
                "The member added is not correct, Member: " + account.getNameMember());
    }


    @When("^I add a Member \"([^\"]*)\", \"([^\"]*)\" to the account and assign a Account Role \"([^\"]*)\" without permission of project creator$")
    public void addAMemberToTheAccount(String member, String email, String role) {
        account.setNameMember(member);
        account.setRoleMember(role);
        account.setProjectCreator(false);
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(urlAccounts.getUrlAccountMember());
        accountMembershipsPage.addAccountMember(email, role, false);
    }

    @When("^I delete the member \"([^\"]*)\" from Pivotal Tracker account in the Account Memberships$")
    public void deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String nameMember) {
        accountMembershipsPage.deleteMember(nameMember);
    }

    @Then("^I should not see the member of account in the table of the Membership Page of Account$")
    public void seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount() {
        assertTrue(accountMembershipsPage.elementDisappear(account.getNameMember()),
                "The member was not deleted " + account.getNameMember());
    }

    @When("^I update an Account Role \"([^\"]*)\" of the member$")
    public void updateAnAccountRoleOfTheMember(String role) {
        accountMembershipsPage.updateMemberRole(account.getNameMember(), role);
    }

    @Then("^I verify the Member Role has changed his Account Role to \"([^\"]*)\"$")
    public void verifyTheMemberRoleHasChangedHisAccountRoleTo(String role) {
        assertTrue(accountMembershipsPage.waitForAnswer(account.getNameMember(), role, true),
                "The Member Account doesn't change its role: " + role);
    }

    @And("^I should see all of the accounts except the deleted account$")
    public void iShouldSeeAllOfTheAccountsExceptTheDeletedAccount() {
        assertTrue(accountsPage.elementDisappear(account.getNameAccount()));
    }


}

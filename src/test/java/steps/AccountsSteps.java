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
        logs.info("Update the name of " + account.getNameAccount() + " to: " + nameAccount);
        account.setNameAccount(nameAccount);
        logs.info("Navigate to the Settings page of the Account");
        pageTransporter.navigateToAccountSettingsPage(urlAccounts.getUrlSettings());
        accountSettingsPage.setNameAccount(nameAccount);
    }

    @When("I navigate to the Settings Tab in Account Page")
    public void navigateToTheSettingsTabInAccountPage() {
        logs.info("Navigate to the Settings tab in the Account Page");
        accountSettingsPage = pageTransporter.navigateToAccountSettingsPage(urlAccounts.getUrlSettings());
    }

    @And("^I delete the account that was created$")
    public void deleteAccount() {
        logs.info("Delete de account: " + account.getNameMember());
        accountsPage = accountSettingsPage.deleteAccount();
    }

    @When("^I navigate to Account page$")
    public void navigateToAccountPage() {
        logs.info("Navigate to the Accounts page");
        accountsPage = pageTransporter.navigateToAccountsPage();
    }


    @When("^I navigate to Dashboard page$")
    public void navigateToDashboardPage() {
        logs.info("Navigate to the Dashboard page");
        dashboardPage = pageTransporter.navigateToDashboardPage();
    }

    @Then("^I should see the new account in the Project Creation popup$")
    public void seeTheNewAccountInTheProjectCreationPopup() {
        logs.info("Navigate to the Project Create Popup");
        createProjectPopup = dashboardPage.clickCreateProjectBtn();
        logs.info("Verify the account " + account.getNameAccount() + " in the list of Project Creation popup");
        createProjectPopup.verifyAccountInList(account.getNameAccount());
    }


    @Then("^I should see a yellow message \"([^\"]*)\" in Accounts Page$")
    public void seeAYellowMessage(String message) {
        logs.info("Verify if a message of confirmation that " + account.getNameAccount() + "was created");
        assertEquals(message, accountsPage.getMessageDelete());
    }


    @When("^I add a Member \"([^\"]*)\", \"([^\"]*)\" to the account and assign a Account Role \"([^\"]*)\" with permission of project creator$")
    public void addAMemberToTheAccountWithPermissionOfProjectCreator(String member, String email, String role) {
        account.setNameMember(member);
        account.setRoleMember(role);
        account.setProjectCreator(true);
        logs.info("Navigate to the Membership Page");
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(urlAccounts.getUrlAccountMember());
        logs.info("It is added a member into the account with permission of Project Creator");
        accountMembershipsPage.addAccountMember(email, role, true);
    }


    @Then("^I should see message of confirmation \"([^\"]*)\" in the Membership Page of Account$")
    public void seeMessageOfConfirmationInTheMembershipPageOfAccount(String message) {
        logs.info("Verify if a message of confirmation that " + account.getNameMember() + "was added");
        assertEquals(accountMembershipsPage.messageConfirmation(), message, "The message is not the correct");
    }

    @And("^I should see the member that was added in the table of the Membership Page of Account$")
    public void seeTheMemberInTheTableOfTheMembershipPageOfAccount() {
        logs.info("Verify if " + account.getNameMember() + "was added to Membership Account");
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
        logs.info("Navigate to the Membership Page");
        accountMembershipsPage = pageTransporter.navigateToAccountMembershipPage(urlAccounts.getUrlAccountMember());
        logs.info("It is added a member into the account without permission of Project Creator");
        accountMembershipsPage.addAccountMember(email, role, false);
    }

    @When("^I delete the member \"([^\"]*)\" from Pivotal Tracker account in the Account Memberships$")
    public void deleteTheMemberFromPivotalTrackerAccountInTheAccountMemberships(String nameMember) {
        logs.info("Delete the member " + account.getNameMember() + " of the Account " + account.getNameAccount());
        accountMembershipsPage.deleteMember(nameMember);
    }

    @Then("^I should not see the member of account in the table of the Membership Page of Account$")
    public void seeNotTheMemberOfAccountInTheTableOfTheMembershipPageOfAccount() {
        logs.info("Verify the member " + account.getNameMember() + " of the Account " + account.getNameAccount());
        assertTrue(accountMembershipsPage.elementDisappear(account.getNameMember()),
                "The member was not deleted " + account.getNameMember());
    }

    @When("^I update an Account Role \"([^\"]*)\" of the member$")
    public void updateAnAccountRoleOfTheMember(String role) {
        logs.info("Update the Role of the member " + account.getNameMember());
        accountMembershipsPage.updateMemberRole(account.getNameMember(), role);
    }

    @Then("^I verify the Member Role has changed his Account Role to \"([^\"]*)\"$")
    public void verifyTheMemberRoleHasChangedHisAccountRoleTo(String role) {
        logs.info("Verify if the Member Roles has changed to :" + role);
        assertTrue(accountMembershipsPage.waitForAnswer(account.getNameMember(), role, true),
                "The Member Account doesn't change its role: " + role);
    }

    @And("^I should see all of the accounts except the deleted account$")
    public void iShouldSeeAllOfTheAccountsExceptTheDeletedAccount() {
        logs.info("Verify that the account " + account.getNameAccount() + " is deleted");
        assertTrue(accountsPage.elementDisappear(account.getNameAccount()));
    }


}

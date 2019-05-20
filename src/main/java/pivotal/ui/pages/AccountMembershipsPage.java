package pivotal.ui.pages;

import core.selenium.DriverMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import pivotal.ui.BasePage;
import org.openqa.selenium.NoSuchElementException;


public class AccountMembershipsPage extends BasePage {
    private DriverMethods driverMethods = new DriverMethods();

    @FindBy(id = "new_member_button")
    private WebElement newMemberBtn;

    @FindBy(xpath = "//div[@class=\"content clearfix\"]")
    private WebElement accountForm;

    @FindBy(id = "members_for_lookup")
    private WebElement memberForLookupTxt;

    @FindBy(id = "notice")
    private WebElement messageConfirmation;

    @FindBy(id = "membership_project_creator")
    private WebElement projectCreatorChk;

    @FindBy(id = "add_member_button")
    private WebElement addMemberBtn;

    @FindBy(id = "remove_member_button")
    private WebElement removeMemberBtn;

    @FindBy(id = "remove_member_tab")
    private WebElement removeMemberTab;

    @FindBy(id = "save_roles")
    private WebElement saveRoles;

    @FindBy(xpath = "//div[@class=\"actions_overlay removable\"]")
    private WebElement actionMemberForm;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountForm));
    }

    private void clickNewMemberBtn() {
        newMemberBtn.click();
    }

    private void clickAddMemberBtn() {
        addMemberBtn.click();
    }

    private void checkProjectCreatorChk() {
        projectCreatorChk.click();
    }

    private final String IDROLE = "membership_account_role_none";

    private final String UPDATEROLE = "//div[@id=\"change_roles_tab_content\"]//select[@data-aid=\"account_role_dropdown\"]";

    private final String ROLEMEMBER = ".//ul[@class='member_type_filter'] //li[@class]";

    private final String MEMBER = "Member";

    private final String PROJCREATOR = "proj creator";

    private final String MEMBERSHIP = "membership";

    private final String MEMBERLIST = "//li[@class=\"non_project_contributor\"]";

    private String locatorRow = "//li[div[contains(text(),'Member')]]";

    private String actionPath = "//li[@id=\"membership\"]//a";

    private String nameMemberPath = "//li[@id=\"membership\"]//div[@class=\"name ellipsify\"]";



    private void selectOption(String role, By by) {
        Select accountRole = new Select(driver.findElement(by));
        accountRole.selectByVisibleText(role);
    }

    private void selectAccountRoleCmb(String role) {
        selectOption(role, By.id(IDROLE));
    }

    public void updateMemberRole(String member, String role) {
        clickActions(member);
        selectOption(role, By.xpath(UPDATEROLE));
        saveRoles.click();
    }

    public void addAccountMember(String name, String role, boolean isProjectCreator) {
        clickNewMemberBtn();
        memberForLookupTxt.sendKeys(name);
//        String element = "//a[contains(text(),'<name>')]";
//        try {
//            driver.findElement(By.xpath(element.replace("name", name))).click();
//        } catch (NoSuchElementException e) {
//            e.getMessage();
//        }
        selectAccountRoleCmb(role);
        if (isProjectCreator) {
            checkProjectCreatorChk();
        }
        clickAddMemberBtn();
    }

    public String messageConfirmation() {
        return messageConfirmation.getText();
    }

    public boolean isMemberInTheList(String member, String role, boolean isProjectCreator) {
        locatorRow = locatorRow.replace(MEMBER, member);
        WebElement row = driver.findElement(By.xpath(locatorRow));
        String roleMember = "";
        try {
            roleMember = row.findElement(By.xpath(ROLEMEMBER)).getText();
        } catch (StaleElementReferenceException e) {
            e.getMessage();
            row = driver.findElement(By.xpath(locatorRow));
            roleMember = row.findElement(By.xpath(ROLEMEMBER)).getText();
        } catch (NoSuchElementException e) {
            e.getMessage();
        }
        if (role.equals(MEMBER) && !isProjectCreator) {
            return true;
        }
        if (roleMember.toLowerCase().equals(role.toLowerCase())) {
            return true;
        } else if (role.equals(MEMBER)) {
            return roleMember.toLowerCase().equals(PROJCREATOR);
        } else {
            return false;
        }
    }

    private void clickActions(String member) {
        wait.until(ExpectedConditions.visibilityOf(messageConfirmation));
        for (WebElement element : driver.findElements(By.xpath(MEMBERLIST))) {
            String idMember = element.getAttribute("id");
            String nameMember = driver
                    .findElement(By.xpath(nameMemberPath.replace(MEMBERSHIP, idMember)))
                    .getText()
                    .toLowerCase();
            if (member.toLowerCase().equals(nameMember)) {
                actionPath = actionPath.replace(MEMBERSHIP, idMember);
                break;
            }
        }
        driver.findElement(By.xpath(actionPath)).click();
    }


    private void clickRemoveMemberTab() {
        removeMemberTab.click();
    }

    private void clickRemoveMemberBtn() {
        removeMemberBtn.click();
    }

    public void deleteMember(String member) {
        clickActions(member);
        wait.until(ExpectedConditions.visibilityOf(saveRoles));
        clickRemoveMemberTab();
        clickRemoveMemberBtn();
    }

    public boolean waitForAnswer(String member, String role, boolean isCreatorProject){
        int cont = 50;
        boolean result = false;
        while (cont > 0) {
            driverMethods.waitForMilliSeconds(500);
            if (isMemberInTheList(member, role, isCreatorProject)) {
                result = true;
                break;
            } else {
                cont--;
            }
        }

        return result;
    }
    public boolean elementDisappear(String member) {
        return driverMethods.waitForElementDisappear(By.xpath(locatorRow.replace(MEMBER, member)));
    }

}

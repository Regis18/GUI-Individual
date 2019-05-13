package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import pivotal.ui.BasePage;
import org.openqa.selenium.NoSuchElementException;



public class AccountMembershipsPage extends BasePage {
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

    @FindBy(id = "add_member_form")
    private WebElement addMemberForm;

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

    private void selectAccountRoleCmb(String role) {
        Select accountRole = new Select(driver.findElement(By.id("membership_account_role_none")));
        accountRole.selectByVisibleText(role);
    }

    public void addAccountMember(String name, String role, boolean isProjectCreator) {
        clickNewMemberBtn();
        memberForLookupTxt.sendKeys(name);
        String element = "//a[contains(text(),'<name>')]";
        try {
            driver.findElement(By.xpath(element.replace("name", name))).click();
        } catch (NoSuchElementException e) {
            e.getMessage();
        }
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
        for (WebElement element: driver.findElements(By.xpath("//li[@class=\"non_project_contributor\"]"))) {
            String idMember = element.getAttribute("id");
            String nameMemberPath = "//li[@id=\"membership\"]//div[@class=\"name ellipsify\"]";
            String roleMemberPath = "//li[@id=\"membership\"]//ul[@class=\"member_type_filter\"]//li[@class]";
            String nameMember = driver.findElement(By.xpath(nameMemberPath.replace("membership", idMember)))
                    .getText()
                    .toLowerCase();
            if (member.toLowerCase().equals(nameMember)) {
                if (role.equals("Member")) {
                    return true;
                }
                String roleMember = driver.findElement(By.xpath(roleMemberPath.replace("membership", idMember)))
                        .getText()
                        .toLowerCase();
                if (role.toLowerCase().equals(roleMember)) {
                    return true;
                } else if (role.equals("Member")) {
                    if (isProjectCreator) {
                        return roleMember.equals("proj creator") ? true : false;
                    } else {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private void clickActions(String member) {
        wait.until(ExpectedConditions.visibilityOf(messageConfirmation));
        String actionPath = "//li[@id=\"membership\"]//a";
        for (WebElement element : driver.findElements(By.xpath("//li[@class=\"non_project_contributor\"]"))) {
            String idMember = element.getAttribute("id");
            String nameMemberPath = "//li[@id=\"membership\"]//div[@class=\"name ellipsify\"]";
            String nameMember = driver.findElement(By.xpath(nameMemberPath.replace("membership", idMember)))
                    .getText()
                    .toLowerCase();
            if (member.toLowerCase().equals(nameMember)) {
                actionPath = actionPath.replace("membership", idMember);
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

    public void isNotAddMemberForm() {
        wait.until(ExpectedConditions.invisibilityOf(addMemberForm));
    }
}

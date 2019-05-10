package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.entities.MatchValue;
import pivotal.ui.BasePage;

public class AccountsPage extends BasePage {
    @FindBy(xpath = "//div[@class=\"page_description\"]")
    private WebElement accountCreateForm;

    @FindBy(id="new_account_link")
    private WebElement newAccountCreateBtn;

    @FindBy(id="//div[@id=\"accounts_module\"]//div[@class=\"name\"]")
    private WebElement accountsModuleLst;

    @FindBy(xpath = "//div[@class=\"content clearfix\"]")
    private WebElement accountForm;

    @FindBy(id = "notice")
    private WebElement messageDelete;


    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountCreateForm));
    }

    public CreateAccountPopup clickNewAccountCreateBtn() {
        newAccountCreateBtn.click();
        return new CreateAccountPopup();
    }

    public Boolean verifyAccountInList(String nameAccount) {
        return MatchValue.existValueInList(nameAccount, driver.findElements(By.xpath("//div[@id=\"accounts_module\"]//div[@class=\"name\"]")));
    }

    public String getMessageDelete() {
        return messageDelete.getText();
    }
}

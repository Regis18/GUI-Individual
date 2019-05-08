package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
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

//    @FindBy(xpath = "//div[@class=\"name\"][normalize-space()=\"Account 7986\"]")

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountCreateForm));
    }

    public CreateAccountPopup clickNewAccountCreateBtn() {
        newAccountCreateBtn.click();
        return new CreateAccountPopup();
    }

    public Boolean verifyAccountInList(String nameAccount) {
        for (WebElement e: driver.findElements(By.xpath("//div[@id=\"accounts_module\"]//div[@class=\"name\"]"))) {
            if (e.getText().equals(nameAccount.toUpperCase())){
                return true;
            } else {
                continue;
            }
        }
        return false;
    }
}
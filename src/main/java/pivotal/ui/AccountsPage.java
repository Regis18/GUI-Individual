package pivotal.ui;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class AccountsPage extends BasePage{
    @FindBy(xpath = "//div[@class=\"page_description\"]")
    private WebElement accountCreateForm;

    @FindBy(id="new_account_link")
    private WebElement newAccountCreateBtn;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountCreateForm));
    }
    public void clickNewAccountCreateBtn() {
        newAccountCreateBtn.click();
    }
}

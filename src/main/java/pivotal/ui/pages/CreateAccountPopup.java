package pivotal.ui.pages;

import core.utils.Logs;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;

public class CreateAccountPopup extends BasePage {
    @FindBy(xpath = "//div[@class=\"tc-form-modal__section\"]")
    private WebElement createAccountPopup;

    @FindBy(xpath = "//input[@data-aid=\"input\"]")
    private WebElement nameAccountTxt;

    @FindBy(xpath = "//button[@data-aid=\"FormModal__submit\"]")
    private WebElement createAccountBtn;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        Logs.getInstance().getLog().info("Wait for Create Account Popup upload in the Browser");
        wait.until(ExpectedConditions.visibilityOf(createAccountPopup));
    }

    public AccountPlansPage createNewAccount(String accountName) {
        Logs.getInstance().getLog().info("Create a New Account setting " + accountName + " in the Name Account Text");
        setAccountName(accountName);
        Logs.getInstance().getLog().info("Click to the Create Project Button");
        clickCreateAccountBtn();
        return new AccountPlansPage();
    }

    private void setAccountName(String accountName) {
        nameAccountTxt.sendKeys(accountName);
    }

    private void clickCreateAccountBtn() {
        createAccountBtn.click();
    }
}

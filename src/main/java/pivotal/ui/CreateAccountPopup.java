package pivotal.ui;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class CreateAccountPopup extends BasePage {
    @FindBy(xpath = "//div[@class=\"tc-form-modal__section\"]")
    private WebElement createAccountPopup;

    @FindBy(xpath = "//input[@data-aid=\"input\"]")
    private WebElement nameAccountTxt;

    @FindBy(xpath = "//button[@data-aid=\"FormModal__submit\"]")
    private WebElement createAccountBtn;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createAccountPopup));
    }

    public void createNewAccount(String accountName) {
        setAccountName(accountName);
        clickCreateAccountBtn();
    }

    private void setAccountName(String accountName) {
        nameAccountTxt.sendKeys(accountName);
    }

    private void clickCreateAccountBtn() {
        createAccountBtn.click();
    }
}

package pivotal.ui.pages;

import core.utils.Logs;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.entities.MatchValue;
import pivotal.ui.BasePage;

public class CreateProjectPopup extends BasePage {
    @FindBy(xpath = "//fieldset[@data-aid=\"account-selector\"]")
    private WebElement accountFrame;
    @FindBy (xpath = "//fieldset[@data-aid=\"account-selector\"]")
    private WebElement accountCmb;

    private String accountList = "//div[@class=\"tc-account-selector__option-account-name\"]";

    @Override
    public void waitUntilPageObjectIsLoaded() {
        Logs.getInstance().getLog().info("Wait for Create Project Popup upload in the Browser");
        wait.until(ExpectedConditions.visibilityOf(accountFrame));
    }

    public Boolean verifyAccountInList(String nameAccount) {
        Logs.getInstance().getLog().info("Click in the Account ComboBox and check if the " + nameAccount + " in the Combo Box Value");
        clickAccountCmb();
        return MatchValue.existValueInList(nameAccount,
                driver.findElements(By.xpath(accountList)));
    }

    private void clickAccountCmb() {
        accountCmb.click();
    }
}

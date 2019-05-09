package pivotal.ui.pages;

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


    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountFrame));
    }

    public Boolean verifyAccountInList(String nameAccount) {
        clickAccountCmb();
        return MatchValue.existValueInList(nameAccount,
                driver.findElements(By.xpath("//div[@class=\"tc-account-selector__option-account-name\"]")));
    }

    private void clickAccountCmb() {
        accountCmb.click();
    }
}

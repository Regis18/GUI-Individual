package pivotal.ui.components;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;



public class AccountBar extends BasePage {
    @FindBy(xpath = "//div[@class=\"content clearfix\"]")
    private WebElement accountForm;

    @FindBy(xpath = "//h2[contains(@class,\"account_name\")]//span")
    private WebElement nameAccountTxt;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountForm));
    }

    public String getNameAccount() {
        return nameAccountTxt.getText();
    }

}

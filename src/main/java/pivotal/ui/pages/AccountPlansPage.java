package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;
import pivotal.ui.components.AccountBar;

public class AccountPlansPage extends BasePage {
    @FindBy(id = "plans_table")
    private WebElement accountPlansForm;

    private final String URLSETTINGS = "//a[@class=\"button\"] [normalize-space()=\"Settings\"]";

    private AccountBar accountBar;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountPlansForm));
    }

    public AccountPlansPage() {
        this.accountBar = new AccountBar();
    }

    public String getURLAccountSettings() {
        return driver.findElement(By.xpath(URLSETTINGS)).getAttribute("href");
    }

    public AccountBar getAccountBar() {
        return accountBar;
    }
}

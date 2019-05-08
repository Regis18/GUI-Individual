package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;

public class AccountSettingsPage extends BasePage {
    @FindBy(xpath = "//div[@class=\"content clearfix\"]")
    private WebElement accountForm;
    @FindBy(xpath = "//a[@data-method=\"delete\"]")
    private WebElement deleteLbl;
    @FindBy(id = "account_name")
    private WebElement nameAccountTxt;
    @FindBy(xpath = "//input[@name=\"commit\"]")
    private WebElement saveBtn;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(accountForm));
    }

    public String getURLAccountSettings() {
        String urlSettings = driver.findElement(By.xpath("//a[@class=\"button\"] [normalize-space()=\"Settings\"]")).getAttribute("href");
        return urlSettings;
    }

    public void deleteAccount() {
        deleteLbl.click();
        driver.switchTo().alert().accept();
    }

    public void setNameAccount(String nameAccount) {
        nameAccountTxt.clear();
        nameAccountTxt.sendKeys(nameAccount);
        saveBtn.click();
    }
}

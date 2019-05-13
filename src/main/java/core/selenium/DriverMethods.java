package core.selenium;

import core.selenium.webdriver.FactoryBrowser;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class DriverMethods {
    private WebDriver webDriver;
    private WebDriverConfig webDriverConfig = WebDriverConfig.getInstance();

    public boolean waitForElementDisappear(By locator) {
        this.webDriver = WebDriverManager.getInstance().getWebDriver();
        int cont = 5;
        boolean result = false;
        while (cont > 0) {
            try {
                this.webDriver.manage()
                        .timeouts()
                        .implicitlyWait(300, TimeUnit.MILLISECONDS);
                webDriver.findElement(locator);
                cont--;
            } catch (NoSuchElementException e) {
                cont = -1;
                result = true;
            } finally {
                this.webDriver.manage()
                        .timeouts()
                        .implicitlyWait(webDriverConfig.getImplicitWaitTime(), TimeUnit.SECONDS);
            }
        }
        return result;
    }
    public void waitForMilliSeconds(int time) {
        this.webDriver = WebDriverManager.getInstance().getWebDriver();

        this.webDriver.manage()
                .timeouts()
                .implicitlyWait(time, TimeUnit.MILLISECONDS);

        this.webDriver.manage()
                .timeouts()
                .implicitlyWait(webDriverConfig.getImplicitWaitTime(), TimeUnit.SECONDS);

    }
}

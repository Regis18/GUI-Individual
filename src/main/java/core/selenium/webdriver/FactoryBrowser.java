package core.selenium.webdriver;

import core.selenium.WebDriverConfig;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class FactoryBrowser {
    private WebDriver webDriver;
    private WebDriverConfig webDriverConfig = WebDriverConfig.getInstance();
    private WebDriverWait webDriverWait;

    public WebDriver getWebDriver() {
        webDriverConfig.initialize();
        String browser = webDriverConfig.getBrowser();
        if (browser.equals("Chrome")) {
            this.webDriver = new Chrome().initDriver();
        } else if (browser.equals("Firefox")) {
            this.webDriver = new Firefox().initDriver();
        }
        this.webDriver.manage().window().maximize();
        this.webDriver.manage()
                .timeouts()
                .implicitlyWait(webDriverConfig.getImplicitWaitTime(), TimeUnit.SECONDS);
        return webDriver;
    }

    public WebDriverWait getWebDriverWait() {
        webDriverWait = new WebDriverWait(webDriver, webDriverConfig.getExplicitWaitTime(),
                webDriverConfig.getWaitSleepTime());
        return webDriverWait;
    }
}

package core.selenium;

import core.selenium.webdriver.FactoryBrowser;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

/**
 * Created by Silvia Valencia on 2/2/2018.
 * Class to manage web driver.
 */
public class WebDriverManager {
    private WebDriver webDriver;
    private WebDriverWait webDriverWait;

    private static WebDriverManager instance = null;

    /**
     * Constructor of page WebDriverManager.
     */
    protected WebDriverManager() {
        initialize();
    }

    /**
     * Gets Instance of a WebElement.
     *
     * @return Instance of WebElement.
     */
    public static WebDriverManager getInstance() {
        if (instance == null || instance.webDriver == null) {
            instance = new WebDriverManager();
        }
        return instance;
    }

    /**
     * Initializes the settings for the driver.
     */
    private void initialize() {
        FactoryBrowser factory = new FactoryBrowser();
        this.webDriver = factory.getWebDriver();
        this.webDriverWait = factory.getWebDriverWait();
    }

    /**
     * Gets the WebDriver.
     *
     * @return WebDriver.
     */
    public WebDriver getWebDriver() {
        return webDriver;
    }

    /**
     * Gets the WebDriver Wait.
     *
     * @return WebDriverWait.
     */
    public WebDriverWait getWait() {
        return webDriverWait;
    }

}

package core.selenium;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

import java.io.FileReader;
import java.io.IOException;

/**
 * Class to manage the config of web driver.
 */
public class WebDriverConfig {

    private static final String BROWSER = "browser";

    private String browser;
    private int implicitWaitTime;
    private int explicitWaitTime;
    private int waitSleepTime;

    private static WebDriverConfig instance;

    /**
     * Constructor of WebDriverConfig.
     * Gets WebDriverConfig as Singleton.
     *
     * @return a instance.
     */
    public static WebDriverConfig getInstance() {
        if (instance == null) {
            instance = new WebDriverConfig();
        }
        return instance;
    }

    /**
     * Initializes WebDriverConfig.
     */
    public void initialize() {
        browser = System.getProperty(BROWSER);  //Get the browser system property
        String url_json = "./waitTime.json";
        JsonParser parser = new JsonParser();
        FileReader reader;
        JsonElement json;
        try {
            reader = new FileReader(url_json);
            json = parser.parse(reader);
        } catch (IOException e)
        {
            System.out.println(e.getMessage());
        }

        implicitWaitTime = 30;
        explicitWaitTime = 40;
        waitSleepTime = 500;
    }

    /**
     * Gets the browser in which the tests are being executed.
     *
     * @return Browser.
     */
    public String getBrowser() {
        return browser;
    }

    /**
     * Gets the implicit wait time set for the WebDriver.
     *
     * @return The implicit time.
     */
    public int getImplicitWaitTime() {
        return implicitWaitTime;
    }

    /**
     * Gets the explicit wait time set for the WebDriver.
     *
     * @return The explicit time.
     */
    public int getExplicitWaitTime() {
        return explicitWaitTime;
    }

    /**
     * Gets the sleep time wait set for the WebDriver.
     *
     * @return Sleep time wait.
     */
    public int getWaitSleepTime() {
        return waitSleepTime;
    }
}

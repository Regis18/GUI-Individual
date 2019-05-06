package core.selenium.webdriver;

import io.github.bonigarcia.wdm.FirefoxDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.CapabilityType;

import java.io.File;
import java.util.HashMap;

public class Firefox {

    public WebDriver initDriver() {
        FirefoxDriverManager.getInstance().version("66.0.3").setup();

        HashMap<String, Object> firefoxPrefs = new HashMap<>();
        //firefoxPrefs.put("profile.default_content_settings.popups", 0);
        FirefoxOptions firefoxOptions = new FirefoxOptions();
        firefoxOptions.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        firefoxOptions.setCapability(FirefoxOptions.FIREFOX_OPTIONS, firefoxOptions);

        return new FirefoxDriver(firefoxOptions);
    }
}

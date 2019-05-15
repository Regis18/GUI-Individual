package hooks;

import core.selenium.WebDriverManager;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import pivotal.entities.Context;
import pivotal.ui.pages.PageTransporter;

public class accountHooks {
    private PageTransporter pageTransporter = PageTransporter.getInstance();
    private Context context;
    private WebDriver driver;


    public accountHooks(Context context) {
        this.context = context;
        driver = WebDriverManager.getInstance().getWebDriver();
    }

    @After("@deleteAccount")
    public void deleteAccount() {
        pageTransporter.navigateToAccountSettingsPage(context.getUrlAccounts()
                                                        .getUrlSettings())
                                                        .deleteAccount();
    }


    @After
    public void embedScreenshot(Scenario scenario) {
        if (scenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException wde) {
                System.err.println(wde.getMessage());
            } catch (ClassCastException cce) {
                cce.printStackTrace();
            }
        }
    }
}

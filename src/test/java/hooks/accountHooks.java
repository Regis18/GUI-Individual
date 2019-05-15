package hooks;

import core.selenium.WebDriverManager;
import core.utils.Logs;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.apache.log4j.Logger;
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
    private Logger logs = Logs.getInstance().getLog();

    public accountHooks(Context context) {
        this.context = context;
        driver = WebDriverManager.getInstance().getWebDriver();
    }

    @After("@deleteAccount")
    public void deleteAccount() {
        logs.info("The Account is deleting");
        pageTransporter.navigateToAccountSettingsPage(context.getUrlAccounts()
                                                        .getUrlSettings())
                                                        .deleteAccount();
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        if (scenario.isFailed()) {
            logs.info("The scenario is failed and the screenshot is taken");
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

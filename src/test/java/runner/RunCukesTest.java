package runner;

import core.selenium.WebDriverManager;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterTest;
import pivotal.ui.pages.AccountSettingsPage;

@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue={"steps"},
        features = {"src/test/resources/features/account.feature"},
        monochrome = true)

public class RunCukesTest extends AbstractTestNGCucumberTests {

    @After
    public void afterExecution() {
        AccountSettingsPage accountSettingsPage = new AccountSettingsPage();
        accountSettingsPage.deleteAccount();
        WebDriverManager.getInstance().getWebDriver().close();
    }
}

package runner;

import core.selenium.WebDriverManager;
import cucumber.api.CucumberOptions;
import cucumber.api.java.bs.A;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterTest;
import pivotal.ui.pages.AccountSettingsPage;
import pivotal.ui.pages.PageTransporter;

@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue={"steps"},
        features = {"src/test/resources/features/account.feature"},
        monochrome = true)

public class RunCukesTest extends AbstractTestNGCucumberTests {

    @AfterTest
    public void afterExecution() {
        AccountSettingsPage accountSettingsPage = new AccountSettingsPage();
//        PageTransporter pageTransporter = PageTransporter.getInstance();
//        String urlSettings = accountSettingsPage.getURLAccountSetting
//        s();
//        pageTransporter.navigateToAccountSettingsPage(urlSettings);
        accountSettingsPage.deleteAccount();
        WebDriverManager.getInstance().getWebDriver().close();

    }
}

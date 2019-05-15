package runner;

import core.selenium.WebDriverManager;
import core.utils.Logs;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.apache.log4j.Logger;
import org.testng.annotations.AfterTest;

import static runner.GenerateReport.generateMasterReport;


@CucumberOptions(
        plugin = {"pretty", "html:target/cucumbe-html-report", "json:target/cucumber.json"},
        glue={"steps", "hooks"},
        features = {"src/test/resources/features/account.feature"},
        monochrome = true)

public class RunCukesTest extends AbstractTestNGCucumberTests {
    private Logger logs = Logs.getInstance().getLog();
    @AfterTest
    public void afterExecution() {
        logs.info("The Test has finished and the Browser is closing");
        WebDriverManager.getInstance().getWebDriver().close();
        logs.info("Generate Report on the Target folder");
        generateMasterReport();
    }
}

package steps;

import com.google.gson.JsonObject;
import core.selenium.WebDriverManager;
import core.utils.FileReader;
import core.utils.Logs;
import cucumber.api.java.en.Given;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import pivotal.ui.pages.LoginPage;
import pivotal.ui.pages.PageTransporter;


/**
 * Created by Yesica on 06/05/2019.
 */
public class LoginSteps {

    private PageTransporter pageTransporter = PageTransporter.getInstance();

    // Pages
    private LoginPage loginPage;
    protected WebDriver driver;
    private Logger logs = Logs.getInstance().getLog();

    @Given("^I am logged in with Username and Password into the Pivotal Tracker$")
    public void logIn() {
        logs.info("The user is logging in to the application Pivotal Tracker");
        JsonObject user = FileReader.readCredentials();
        driver = WebDriverManager.getInstance().getWebDriver();
        loginPage = pageTransporter.navigateToLoginPage();
        String title = driver.getTitle();
        System.out.println(title);
        if (title.toLowerCase().equals("pivotal tracker - sign in") || title.equals("")) {
            loginPage.login(user.get("user").getAsString(), user.get("password").getAsString());
        }

    }
}

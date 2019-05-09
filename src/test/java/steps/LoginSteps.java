package steps;

import com.google.gson.JsonObject;
import core.selenium.WebDriverManager;
import core.utils.FileReader;
import cucumber.api.java.en.Given;
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

    @Given("^I am logged in with Username and Password into the Pivotal Tracker$")
    public void logIn() {
        JsonObject user = FileReader.readCredentials();
        driver = WebDriverManager.getInstance().getWebDriver();
        String title = driver.getTitle();
        if (title.toLowerCase().equals("pivotal tracker - sign in") || title.equals("")) {
            loginPage = pageTransporter.navigateToLoginPage();
            loginPage.login(user.get("user").getAsString(), user.get("password").getAsString());
        }

    }
}

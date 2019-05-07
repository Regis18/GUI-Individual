package steps;

import cucumber.api.java.en.Given;
import pivotal.ui.LoginPage;
import pivotal.ui.PageTransporter;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by Yesica on 06/05/2019.
 */
public class LoginSteps {

    private PageTransporter pageTransporter = PageTransporter.getInstance();
    private Properties prop = new Properties();
    private InputStream input = null;

    // Pages
    private LoginPage loginPage;

    @Given("^I log with Username and Password into the Pivotal Tracker$")
    public void logIn() {
        try {
            input = new FileInputStream("environment.properties");
            prop.load(input);
        } catch (IOException event) {
            event.printStackTrace();
        }
        String userName = prop.get("user").toString();
        String password = prop.get("pass").toString();
        loginPage = pageTransporter.navigateToLoginPage();
        loginPage.login(userName, password);
    }
}

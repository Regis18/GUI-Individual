package pivotal.ui.pages;

import core.utils.Logs;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;

/**
 * Created by Yesica on 07/05/2019.
 */
public class LoginPage extends BasePage {

    @FindBy(id="login_type_check_form")
    private WebElement loginForm;

    @FindBy(id="credentials_username")
    private WebElement userNameTextBox;

    @FindBy(css="input[class='app_signin_action_button']")
    private WebElement nextSignInBtn;

    @FindBy(id="credentials_password")
    private WebElement passwordTextBox;


    @Override
    public void waitUntilPageObjectIsLoaded() {
        Logs.getInstance().getLog().info("Wait for Login Form upload in the Browser");
        wait.until(ExpectedConditions.visibilityOf(loginForm));
    }

    public void login(String userName, String password) {
        Logs.getInstance().getLog().info("Logging the the username and password in to Sign In Page");
        setUserName(userName);
        clickNextSignInBtn();
        setPassword(password);
        clickNextSignInBtn();
    }

    private void setPassword(String password) {
        passwordTextBox.sendKeys(password);
    }

    private void clickNextSignInBtn() {
        nextSignInBtn.click();
    }

    public void setUserName(String userName) {
        userNameTextBox.sendKeys(userName);
    }

}

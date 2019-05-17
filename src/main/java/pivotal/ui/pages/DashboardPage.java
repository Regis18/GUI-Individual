package pivotal.ui.pages;

import core.utils.Logs;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.BasePage;


public class DashboardPage extends BasePage {
    @FindBy(xpath = "//div[@data-aid=\"Dashboard\"]")
    private WebElement dashboardFrame;

    @FindBy(id = "create-project-button")
    private WebElement createProjectBtn;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        Logs.getInstance().getLog().info("Wait for Dashboard Form upload in the Browser");
        wait.until(ExpectedConditions.visibilityOf(dashboardFrame));
    }

    public CreateProjectPopup clickCreateProjectBtn() {
        Logs.getInstance().getLog().info("Click to the Button Create Project in the Dashboard Page");
        createProjectBtn.click();
        return new CreateProjectPopup();
    }

}

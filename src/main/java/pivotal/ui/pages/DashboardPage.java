package pivotal.ui.pages;

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
        wait.until(ExpectedConditions.visibilityOf(dashboardFrame));
    }

    public CreateProjectPopup clickCreateProjectBtn() {
        createProjectBtn.click();
        return new CreateProjectPopup();
    }

}

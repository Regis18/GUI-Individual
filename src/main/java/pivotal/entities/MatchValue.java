package pivotal.entities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class MatchValue {
    public static boolean existValueInList(String value, List<WebElement> list) {
        for (WebElement e: list) {
            if (e.getText().equals(value.toUpperCase())){
                return true;
            } else {
                continue;
            }
        }
        return false;
    }
}

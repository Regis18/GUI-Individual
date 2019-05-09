package hooks;

import cucumber.api.java.After;

public class accountHooks {
    @After("@deleteAccount")
    public void deleteAccount() {
        System.out.println("Imprimir despues de cada scenario");
    }
}

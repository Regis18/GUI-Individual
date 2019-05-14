package pivotal.entities;


public class Context {
    private Accounts accounts;

    public Context() {
        this.accounts = new Accounts();
    }

    public Accounts getAccounts() {
        return accounts;
    }

}

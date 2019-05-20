package pivotal.entities;


public class Context {
    private UrlAccounts urlAccounts;
    private Accounts accounts;

    public Context() {
        this.urlAccounts = new UrlAccounts();
        this.accounts = new Accounts();
    }

    public UrlAccounts getUrlAccounts() {
        return urlAccounts;
    }

    public Accounts getAccounts() {
        return accounts;
    }
}

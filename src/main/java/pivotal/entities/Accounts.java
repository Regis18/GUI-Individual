package pivotal.entities;

public class Accounts {
    private String nameAccount;
    private String urlSettings;
    private String urlProjects;
    private String urlAccountMember;
    private String urlAccountPlans;

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public String getUrlSettings() {
        return urlSettings;
    }

    public void setUrlSettings(String urlSettings) {
        this.urlSettings = urlSettings;
        this.urlProjects = urlSettings.replace("settings", "projects");
        this.urlAccountPlans = urlSettings.replace("settings", "plans");
        this.urlAccountMember = urlSettings.replace("settings", "memberships");
    }

    public String getUrlProjects() {
        return urlProjects;
    }

    public void setUrlProjects(String urlProjects) {
        this.urlProjects = urlProjects;
    }

    public String getUrlAccountMember() {
        return urlAccountMember;
    }

    public void setUrlAccountMember(String urlAccountMember) {
        this.urlAccountMember = urlAccountMember;
    }

    public String getUrlAccountPlans() {
        return urlAccountPlans;
    }

    public void setUrlAccountPlans(String urlAccountPlans) {
        this.urlAccountPlans = urlAccountPlans;
    }
}

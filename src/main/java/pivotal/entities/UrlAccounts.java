package pivotal.entities;

public class UrlAccounts {
    private String urlSettings;
    private String urlProjects;
    private String urlAccountMember;
    private String urlAccountPlans;

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


    public String getUrlAccountMember() {
        return urlAccountMember;
    }


    public String getUrlAccountPlans() {
        return urlAccountPlans;
    }

}

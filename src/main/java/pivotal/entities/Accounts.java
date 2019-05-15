package pivotal.entities;

public class Accounts {
    private String nameAccount;
    private String roleMember;
    private String nameMember;
    private boolean isProjectCreator;

    public String getRoleMember() {
        return roleMember;
    }

    public void setRoleMember(String roleMember) {
        this.roleMember = roleMember;
    }

    public String getNameMember() {
        return nameMember;
    }

    public void setNameMember(String nameMember) {
        this.nameMember = nameMember;
    }

    public boolean isProjectCreator() {
        return isProjectCreator;
    }

    public void setProjectCreator(boolean projectCreator) {
        isProjectCreator = projectCreator;
    }


    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }
}

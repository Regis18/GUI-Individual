package runner;


import core.utils.Logs;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import org.apache.log4j.Logger;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class GenerateReport {
    private static Logger logs = Logs.getInstance().getLog();


    public static void generateMasterReport() {
        logs.info("The user is logging in to the application Pivotal Tracker");
        File reportOutputDirectory = new File("target");
        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add("C:\\Users\\Admin\\IdeaProjects\\GUI TESTING\\target\\cucumber.json");

        String buildNumber = "1";
        String projectName = "Pivotel tracker Accounts";
        boolean runWithJenkins = false;

        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
        configuration.setRunWithJenkins(runWithJenkins);
        configuration.setBuildNumber(buildNumber);
// addidtional metadata presented on main page
        configuration.addClassifications("Platform", "Windows");
        configuration.addClassifications("Browser", "Chrome");
        configuration.addClassifications("Branch", "release/1.0");


        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        Reportable result = reportBuilder.generateReports();
// and here validate 'result' to decide what to do if report has failed
    }
}

package runner;


import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.presentation.PresentationMode;
import net.masterthought.cucumber.sorting.SortingMethod;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class GenerateReport {
    public static void generateMasterReport() {
        try{
            File reportOutputDirectory = new File("target");
            List<String> list = new ArrayList<>();
            list.add("target/cucumber1.json");
            list.add("target/cucumber2.json");

            String buildNumber = "1";
            boolean runWithJenkins = false;
            String projectName = "Accounts Pivotal Tracker";
            Configuration configuration = new Configuration(reportOutputDirectory,projectName);
            configuration.setRunWithJenkins(runWithJenkins);
            configuration.setBuildNumber(buildNumber);
            configuration.addClassifications("Platform", "Windows");
            configuration.addClassifications("Browser", "Chrome");
            configuration.addClassifications("Branch", "release/1.0");
            configuration.setSortingMethod(SortingMethod.NATURAL);
            configuration.addPresentationModes(PresentationMode.EXPAND_ALL_STEPS);

            ReportBuilder reportBuilder = new ReportBuilder(list,configuration);
            reportBuilder.generateReports();

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

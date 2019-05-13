package runner;

import org.testng.IExecutionListener;

public class TestExecutionListener implements IExecutionListener {
    @Override
    public void onExecutionStart() {
        System.out.println("Accounts Test is staring the execution");
    }
    @Override
    public void onExecutionFinish() {
        System.out.println("Generating the Cucumber Report");
        GenerateReport.generateMasterReport();
        System.out.println("Accounts Test finished, the execution");
    }
}

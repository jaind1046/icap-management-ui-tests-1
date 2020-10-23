//<reference path="./steps.d.ts" />

const {
    I,
    filedropPage
} = inject();

Given("I am logged into the ui", () => {
    I.loginNoPwd();
    I.wait(5);
});

Given("I have navigated to the File Drop page", () => {
    I.goToFileDrop();
});

Given(/^I have processed a supported file (.*)$/, (supportedFile) => {
    I.uploadFile(supportedFile);
    I.wait(3);
});

When('I view result and click on Download Analysis Report', () => {
    filedropPage.clickViewResult();
    I.handleDownloads();
    I.click(filedropPage.buttons.downloadAnalysisReport);
});

Then(/^The full analysis report is downloaded and available as (.*)$/, (analysisReport) => {
    I.amInPath('output/downloads');
    I.seeFileNameMatching(analysisReport);
});
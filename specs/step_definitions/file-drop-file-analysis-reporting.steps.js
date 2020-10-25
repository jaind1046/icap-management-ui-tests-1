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
    I.wait(5);
});

When('I click on XML', () => {
    I.handleDownloads();
    filedropPage.clickXml;
});

Then(/^the full XML report (.*) is downloaded$/, (xmlFile) => {
    I.amInPath('output/downloads');
    I.seeFileNameMatching(xmlFile);
});

When('I click on XML', () => {
    I.handleDownloads();
    filedropPage.clickPdf;
});

Then(/^the full XML report (.*) is downloaded$/, (pdfFile) => {
    I.amInPath('output/downloads');
    I.seeFileNameMatching(pdfFile);
});
//<reference path="./steps.d.ts" />

var assert = require("assert");

const { I, filedropPage } = inject();

Given("I am logged into the ui", () => {
  I.loginNoPwd();
  I.wait(5);
  //pause();
});

Given("I have navigated to the FileDrop page", () => {
  I.goToFileDrop();
});

When(
  /^I click Select a file and choose a supported file (.*)$/,
  (supportedFile) => {
    I.attachFile(filedropPage.buttons.fileInput, supportedFile);
  }
);

Then("the File is processed by the file drop service", () => {
  I.seeElement(filedropPage.buttons.viewresult);
});

Then(/^I can view more detailed results with file attibutes (.*) and (.*)$/, (fileName, type) => {
    I.seeElement(filedropPage.sections.analysisReport);
    I.seeInSource(fileName, type);
  }
);
 
When(/^I click Select a non processable file into file drop (.*)$/, (unsupportedFile) => {
    I.attachFile(filedropPage.buttons.fileInput, unsupportedFile);
  }
);

Then(/^the expected validation error is displayed as (.*)$/, (error) => {
  I.seeInSource(error);
});

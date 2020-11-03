const {
    I,
    analyticsPage
} = inject();

Given("I am logged into the ui", () => {
    I.loginNoPwd();
  
});

Given("I have navigated to the analytics page", () => {
    I.goToAnalytics();
});

When(/^I filter in the file risk (.*)$/, (fileRisk) => {
    analyticsPage.filterByRisk(fileRisk)

});

Then(/^the chart is updated to only show the risk (.*)$/, (filteredRisk) => {
    //TODO

});

//<reference path="./steps.d.ts" />


const {I} = inject();

Given('I have navigated to the Request History page', () => {
    homePage.clickRequestsHistory();
});
When('I click on the Items Shown drop down and select a number of items as {int} and apply', (itemCount) => {
    requesthistoryPage.selectCountOfFiles(itemCount);
});
Then('the count of files displayed is as selected {int} and will show in the items show dropdown', (fileCount) => {
    I.assert(requesthistoryPage.countFileRecords(), fileCount);
});
When('I click on the Add Filter button', () => {
    requesthistoryPage.clickAddFilterButton();
});
When('add multiple filter selections as {string}, {string}, {string}', (filterOne, filterTwo, filterThree) => {
    requesthistoryPage.addFilterWithValue(filterOne);
    requesthistoryPage.addFilterWithValue(filterTwo);
    requesthistoryPage.addFilterWithValue(filterThree);
});
Then('the result list shows files with the applied filtertypes {string}', (filteredFile) => {
    //todo: rewrite after updating @TEST-179
    requesthistoryPage.checkFilters(filteredFile);
});

Given('{string} and {string} are applied', (filterOne, filterTwo) => {
    requesthistoryPage.checkFilters(filterOne);
    requesthistoryPage.checkFilters(filterTwo);
});
When('I remove {string}', (filterName) => {
    requesthistoryPage.removeAppliedFilter(filterName);
});

When('I click on the Add Filter button and add a filter selection as {string}', (filter) => {
    requesthistoryPage.addFilterWithValue(filter);

});

Then('the result list shows all files as {string}', (filteredFile) => {
    requesthistoryPage.checkFilters(filteredFile);
    requesthistoryPage.checkFileValues(filteredFile);
});

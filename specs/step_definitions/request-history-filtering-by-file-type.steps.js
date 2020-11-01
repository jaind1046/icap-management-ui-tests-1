//<reference path="../../src/utils/steps.d.ts" />


const { I, requesthistoryPage } = inject();

Given('I have navigated to the Request History page', () => {
    I.goToRequestHistory();
});
When('I click on the Add Filter button and add a file type filter as {string}', (filter) => {
    requesthistoryPage.clickMoreFiltersButton();
    requesthistoryPage.clickAddFilterButton();
    requesthistoryPage.addFilterWithValue(filter);
});
Then('the result list only shows files with the selected types as {string}', (filteredType) => {
    requesthistoryPage.checkFileTypeValues(filteredType);
});

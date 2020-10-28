//<reference path="../../src/utils/steps.d.ts" />


const { I, requesthistoryPage } = inject();

Given('I have navigated to the Request History page', () => {
    I.goToRequestHistory();
});

When('I click on the More Filters button', () => {
    requesthistoryPage.clickMoreFiltersButton();
});
When('I click on the Add Filter button and add a filter selection as {string}', (filter) => {
    requesthistoryPage.clickAddFilterButton();
    requesthistoryPage.addFilterWithValue(filter);
});
Then('the result list only shows filtered files as {string}', (filteredType) => {
    requesthistoryPage.checkFileTypeValues(filteredType);
});
const {
    I,
    analyticsPage
} = inject();

let datetimeFrom = analyticsPage.inputs.datetimeFrom;
let datetimeTo = analyticsPage.inputs.datetimeTo;

let filterValueFrom;
let filterValueTo;
Given('I am logged into the ui', () => {
    I.loginNoPwd();
});

Given('I have navigated to the Dashboard page', () => {
    I.goToAnalytics();
    filterValueFrom = I.grabValueFrom(datetimeFrom);
    filterValueTo = I.grabValueFrom(datetimeTo);

});

When('I make a time selection with {string} and click apply', (timeInterval) => {
    analyticsPage.chooseTimeInterval(timeInterval);
});
Then('the requests for the selected {string} are displayed', () => {
//todo: write step definition after function implementation
});
Then('the date range for the selected period is displayed in the Date/Time field as ${string}', (dateRange) => {
    analyticsPage.checkDateTimeFilterValues(dateRange);
});

When('I make a new time {string} selection and click apply', (timeInterval) => {
    analyticsPage.chooseTimeInterval(timeInterval);
});
Given('a previous time selection is applied', () => {
    I.seeInField(datetimeFrom, filterValueFrom);
    I.seeInField(datetimeTo, filterValueTo);
});

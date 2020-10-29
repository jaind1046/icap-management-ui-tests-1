var moment = require('moment');
const {
    I,
    requesthistoryPage
} = inject();

Given("I am logged into the ui", () => {
    I.loginNoPwd();

});

Given("I have navigated to the Request History page", () => {
    I.goToRequestHistory();
});

When(/^I click dateTime and select a (.*)$/, (timeInterval) => {
    requesthistoryPage.openTimeMenu();
    requesthistoryPage.selectTimePeriod(timeInterval)
    I.wait(3)

});

Then(/^the start date range is updated to (.*) with the end date range as (.*)$/, (datetimeFrom, datetimeTo) => {
    requesthistoryPage.assertAccurateTimeFromIsSet(datetimeFrom);
    requesthistoryPage.assertAccurateTimeToIsSet(datetimeTo);

});

Then('the files processed for the selected period are displayed', () => {
    I.seeElement(requesthistoryPage.table.historyTable)
    //TODO
});

When(/^I select a valid (.*) and (.*)$/, (datetimeFrom, datetimeTo) => {
    requesthistoryPage.setTimeFrom(datetimeFrom);
    requesthistoryPage.setTimeTo(datetimeTo);

});

When(/^I select a custom over 24 hours range from (.*) to (.*)$/, (datetimeFrom, datetimeTo) => {
    requesthistoryPage.setTimeFrom(datetimeFrom);
    requesthistoryPage.setTimeTo(datetimeTo);
});

Then('the expected {string} is displayed', () => {
    I.seeInSource('') //TODO
});


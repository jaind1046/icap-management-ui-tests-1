var moment = require('moment');
const {
    I,
    requesthistoryPage
} = inject();

let displayedRange;
let selectedRange;

Given("I am logged into the ui", () => {
    I.loginNoPwd();
});

Given("I have navigated to the Request History page", () => {
    I.goToRequestHistory();
});

When(/^I open the date picker and select a (.*)$/, (timeInterval) => {
    requesthistoryPage.openDatePicker();
    requesthistoryPage.selectTimePeriod(timeInterval)
   });

Then(/^the date range is updated to be from (.*) hrs earlier to (.*)$/, async (datetimeFrom, datetimeTo) => {
    displayedRange = await I.grabTextFrom(requesthistoryPage.calendar.reportRange);
    selectedRange = requesthistoryPage.getDateRange(datetimeFrom, datetimeTo);
    I.assertEqual(displayedRange, selectedRange, 'Time ranges do NOT match');
    
   
});

Then('the files processed for the selected period are displayed', () => {
    requesthistoryPage.isDataInRange(displayedRange);
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



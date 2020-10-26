Feature: request-history-filtering-by-date
    As a admin I need to validate file requests history filtering by date in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
        Given I have navigated to the Request History page

    @TEST-167_168
    Scenario Outline: I am able to change the date range of the files displayed
        When I click dateTime and select a <timeInterval>
        Then the start date range is updated to <datetimeFrom> with the end date range as <datetimeTo>
        And the files processed for the selected period are displayed
        Examples:
            | timeInterval | datetimeFrom     | datetimeTo   |
            | 1 Hour       | 1 hour earlier   | current time |
            | 12 Hours     | 12 hours earlier | current time |
            | 24 Hours     | 24 hours earlier | current time |


    @datepicker
    Scenario Outline: I can filter the request log using the date picker
        When I select a valid <datetimeFrom> and <datetimeTo>
        Then the files processed for the selected period are displayed
        Examples:
            | datetimeFrom     | datetimeTo       |
            | 21/09/2020 10:00 | 21/09/2020 11:00 |
            | 20/09/2020 23:00 | 21/09/2020 11:00 |
            | 20/09/2020 11:00 | 22/09/2020 11:00 |


    @TEST-184
    Scenario: I cannot filter the date range to a time greater than 24 hours
        When I select a custom range over 24 hours
            | datetimeFrom     | datetimeTo       |
            | 21/09/2020 10:00 | 24/09/2020 11:00 |
        Then the expected validation error is displayed and the date range is not updated


    @TEST-
    Scenario: I cannot filter the requests log using a future date
        When I select a date in future "futureDate"
        Then the expected validation error is displayed


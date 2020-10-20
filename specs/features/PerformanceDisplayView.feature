Feature:

    Background:
        Given I have logged into the ui


    @TEST-150
    Scenario: I am able to navigate to the dashboard
        When I click on Dashboard in the navigation panel
        Then I am taken to the Dashboard page

    @TEST-151
    Scenario Outline: I am able to filter the dashboard requests by time
        Given I have navigated to the Dashboard page
        When I make a time selection with <time> and click apply
        Then the requests for the selected <time> are displayed
        And the date range for the selected period is displayed in the Date/Time field as <dateRange>
        Examples:
            | time     | dateRange |
            | 12 Hours |           |
            | 12 Hours |           |
            | 12 Hours |           |


    @TEST-152
    Scenario Outline: I am able to update the time frame for dashboard requests
        Given I have navigated to the Dashboard page and a previous time selection is applied
        When I make a new time <time> selection and click apply
        Then the requests for the selected <time> are displayed
        And the date range for the selected period is displayed in the Date/Time field as <dateRange>
        Examples:
            | time     | dateRange |
            | 12 Hours |           |
            | 12 Hours |           |
            | 12 Hours |           |

    @TEST-192
    Scenario: I can remove file-outcomes from the filters on the charts
        Given I have navigated to the Dashboard page
        When I click on <fileOutcome> on <chart>
        Then the chart is updated to remove <fileOutcome>
        Examples:
            | chart         | fileOutcome   |
            | pie chart     | Safe          |
            | pie chart     | Blocked       |
            | line graph    | Safe          |
            | line graph    | Blocked       |
Feature: Transaction / ICAP History View

    Background:
        Given I have logged into the ui


    @TEST-162
    Scenario: I am able to navigate to the request history page
        When I select Request History in the navigation panel
        Then I am taken to the Request History Page

    @TEST-163_164_165_180
    Scenario Outline: I am able to filter the risks log
        Given I have navigated to the Request History page
        When I click on the Add Filter button and add a filter selection as <filter>
        Then the result list shows all files as <filteredFile>
        Examples:
            | filter                | filteredFile |
            | fileOutcome_sanitised | sanitised    |
            | fileOutcome_dangerous | safe         |
            | FileID_123            | 123          |
            | FileType_docx         | docx         |
            | FileType_Word         | Word         |


    @TEST-166
    Scenario Outline: I am able to change the number of files displayed on the page
        Given I have navigated to the Request History page
        When I click on the Items Shown drop down and select a number of items as <itemCount> and apply
        Then the count of files displayed is as selected <fileCount> and will show in the items show dropdown
        Examples:
            | itemCount | fileCount |
            | 25        | 25        |
            | 100       | 100       |


    @TEST-167_168
    Scenario Outline: I am able to change the date range of the files displayed
        Given I have navigated to the Request History page
        When I click on Date/Time and select a custom range as <customRange>
        Then the files processed for the selected period are displayed and <dateRange> is displayed in the Date/Time field
        Examples:
            | customRange | dateRange |
            | 12 hours    |           |
            | 3  hours    |           |


    @TEST-169
    Scenario: I am able to view more detail on a file
        Given I have navigated to the Request History page
        When I click on a file
        Then a box with the file ID at the top will be displayed
        And issue items, sanitisation items, remedy items, and the content management policy details are available to be viewed


    @TEST-179
    Scenario Outline: Validate requests log view using a combination of multiple filters
        Given I have navigated to the Request History page
        When I click on the Add Filter button
        And add multiple filter selections as <filterOne>, <filterTwo>, <filterThree>
        Then the result list shows files with the applied filtertypes <filteredFile>
        Examples:
            | filterOne             | filterTwo | filterThree | filteredFile |
            | fileOutcome_sanitised |           |             |              |
            | fileOutcome_dangerous |           |             |              |
            | FileID_123            |           |             |              |
            | FileType_docx         |           |             |              |
            | FileType_Word         |           |             |              |

    @TEST-184
    Scenario Outline: I cannot filter the date range to a time greater than 24 hours
        Given I have navigated to the Request History page
        When I has click on Date/Time and select a custom range as <customRange> and apply
        Then the expected validation error is displayed and the date range is not updated
        Examples:
            | customRange | dateRange |
            | 25 hours    |           |

    @TEST-189
    Scenario: I can remove individual filters
        Given I navigated to the Request History page
        And <filterOne> and <filterTwo> are applied
        When I remove <filterOne>
        Then the filter is updated and the result list shows files with the applied filtertypes 
        Examples:  
            | filterOne     | filterTwo             | filteredFile |
            | FileType_docx | fileOutcome_sanitised |              |
            | FileType_Word | FileType_Word         |              |

    @TEST-190
    Scenario Outline: I am able to update the time frame for request history
        Given I have navigated to the Request History page and a previous time selection is applied
        When I make a new time <time> selection and click apply button
        Then the files processed for time <time> are displayed and the <dateRange> for the selected period is displayed in the Date/Time field
        Examples:
            | time     | dateRange |
            | 12 Hours |           |
            | 12 Hours |           |
            | 12 Hours |           |


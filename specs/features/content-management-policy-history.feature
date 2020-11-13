@content-management-policy-history
Feature: content-management-policy-history
    As a admin I need to view and search the policy history in order to confirm that the solution works as expected

    Background:
        Given I am logged into the portal
        Given I am on current policy screen

    @smoke
    @TEST-217
    Scenario Outline: I can change the number of items displayed on a page
        Given I have navigated to the Policy History page and there are more than <availableRecords> policies in the history
        When Items Shown is changed to <itemCount>
        Then up to <fileCount> previous policies are displayed
        Examples:
            | itemCount | fileCount     | availableRecords  |
            | 25        |   1           |         1         |
            | 50        |   1           |         1         |
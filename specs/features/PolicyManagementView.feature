Feature: Policy Management View

    Background:
        Given the user has logged into the ui


    @TEST-153
    Scenario: A user selecting the "Current Policy" in the navigation panel will be taken to the current policy page
        When the user clicks on Current Policy in the navigation panel
        Then the user is taken to the current policy page

    @TEST-154
    Scenario: A user selecting the "Policy History" in the navigation panel will be taken to the policy history page
        When the user clicks on Policy History in the navigation panel
        Then the user is taken to the Policy History page
        And the Policy History page is displayed

    @TEST-155
    Scenario: A user is able to change part of the policy from Allow to Sanitise and the policy can be saved with all changes
        Given the user has logged into the ui
        And has navigated to the "Current Policy" page
        And has changed one of the "Content Flags" from "Allow" to "Sanitise"
        When the "Save Changes" button is clicked
        Then the changes are saved
        And the previous policy can now be located in the "Policy history" page

    @TEST-156
    Scenario: A user can view previous Policy details
        Given user has navigated to the "Previous Policy" tab
        And click view
        Then the previous Policy is displayed

    @TEST-157
    Scenario:A user can activate a previous policy
        When the activate button is clicked
        Then the previous Policy is activated
        And the successful activation message is displayed

    @TEST-161
    Scenario: A user can change the number of items displayed on a page
        Given user has navigated to the "Policy History" page
        And there are more than 10 policies in the history
        When "Items Shown" is changed to <itemCount>
        Then up to <fileCount> previous policies are displayed
        Examples:
        | itemCount | fileCount |
        | 25        | 25        |
        | 100       | 100       |

    @TEST-188
    Scenario: A user can cancel any updates that they have done to the policy by pressing cancel
        Given user has navigated to the "Current Policy" page
        And user has updated sections of the current policy
        When the user presses the "Cancel button"
        Then the changes are undone
        And the Current policy defaults to the latest saved policy
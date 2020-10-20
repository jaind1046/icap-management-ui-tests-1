Feature: Policy Management View

    Background:
        Given I have logged into the ui


    @TEST-153
    Scenario: Selecting the "Current Policy" in the navigation panel will take me to the current policy page
        When I click on Current Policy in the navigation panel
        Then I am taken to the current policy page

    @TEST-154
    Scenario: Selecting the "Policy History" in the navigation panel will be take me to the policy history page
        When I click on Policy History in the navigation panel
        Then I am taken to the Policy History page

    @TEST-155
    Scenario Outline: I am able to change part of the policy and the policy can be saved with all changes
        Given I have navigated to the Current Policy page
        And has changed one of the <ContentFlags> for <fileType> from <FlagType1> to <FlagType2>
        When the Save Changes button is clicked
        Then the changes are saved and the previous policy can now be located in the Policy history page
        Examples:
            | fileType   | ContentFlags    | FlagType1 | FlagType2 |
            | Word       | Embedded Files  | Sanitise  | Disallow  |
            | Excel      | Review Comments | Disallow  | Sanitise  |
            | Powerpoint | Embedded Images | Disallow  | Sanitise  |
            | PDF        | Acroform        | Sanitise  | Disallow  |

    @TEST-156
    Scenario: I can view previous Policy details
        Given I have navigated to the Previous Policy tab
        When I click view on a previous policy
        Then the previous Policy is displayed

    @TEST-157
    Scenario: I can activate a previous policy
        Given I have navigated to the Current Policy page
        When I click activate on a previous policy
        Then the previous Policy is activated

    @TEST-161
    Scenario Outline: I can change the number of items displayed on a page
        Given I have navigated to the Policy History page and there are more than 10 policies in the history
        When Items Shown is changed to <itemCount>
        Then up to <fileCount> previous policies are displayed
        Examples:
        | itemCount | fileCount |
        | 25        | 25        |
        | 100       | 100       |

    @TEST-188
    Scenario: I can cancel any updates that they have done to the policy by pressing cancel
        Given I have navigated to the Current Policy page and have updated sections of the current policy
        When I press Cancel
        Then the changes are undone and the Current policy defaults to the latest saved policy
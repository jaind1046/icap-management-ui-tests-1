Feature: content-management-previous-policy
    As a admin I need to view, validate the accuracy of and activate previous policy details in order to confirm that the solution works as expected

    Background:
        Given I am logged into the portal
        Given I am on current policy screen

    @TEST-154
    Scenario: Selecting the "Policy History" in the navigation panel will be take me to the policy history page
        When I click on Policy History in the navigation panel
        Then I am taken to the Policy History page


    @TEST-156
    Scenario: I can view previous Policy details
        Given I click on Policy History in the navigation panel
        When I click view on a previous policy
        Then the previous Policy is displayed

    @TEST-157
    Scenario: I can activate a previous policy
        Given I click on Policy History in the navigation panel
        When I click activate on a previous policy
        Then the previous Policy is activated
Feature: user-records-admin
    As a admin I need to validate successful user record addition, editing and deletion in order to confirm that the solution works as expected

    Background: Login
        Given I am logged into the ui

    @TEST-171
    Scenario Outline: I can add a new user to the ui
        Given I have logged into the ui and navigated to the Users page
        When I add a new user with a valid <email>
            | name    | email                    |
            | tester1 | tester1@glasswalltest.co |
            | tester2 | tester2@glasswalltest.co |
        Then The new user record is saved

    @TEST-172
    Scenario Outline: I can delete another user from the page
        Given I have logged into the ui and navigated to the Users page
        When I delete an existing user <name>
            | name    | email                    |
            | tester2 | tester2@glasswalltest.co |
        Then The user record is no longer available


    @TEST-185
    Scenario Outline: A new user cannot be added with a invalid email
        Given I have logged into the ui and navigated to the Users page
        When I add a new user with a invalid <email>
            | name         | email             |
            | InvalidUser1 | Invalid@email.com |
            | InvalidUser2 | Invalid           |
        Then the record is not saved and the expected validation error is displayed

    @TEST-186
    Scenario Outline: A duplicate user cannot be added
        Given I have logged into the ui and navigated to the Users page
        When I add a new user with <email> that is already used
            | name    | email                    |
            | tester1 | tester1@glasswalltest.co |
        Then the expected validation error is displayed and the record is not saved

    @TEST-191
    Scenario: I cannot delete my own account
        Given I have logged into the ui and has navigated to the Users page
        When I observe my account
        Then there will be no delete button next to my account
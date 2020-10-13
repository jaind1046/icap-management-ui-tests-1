Feature: User Management View


    Background: Login


    @TEST-171
    Scenario: An admin user can add a new user to the ui
        Given user has logged into the ui as an admin
        And user has navigated to the Users page
        When admin add a new user with a valid email address
            | name | email | role |
            |      |       |      |
        Then The new user record is saved

    @TEST-172
    Scenario: An admin user can delete another user from the page
        Given user has logged into the ui as an admin
        And admin user has navigated to the Users page
        When admin user deletes a existing user
            | name | email | role |
            |      |       |      |
        Then The user record is no longer available

    @TEST-173
    Scenario: An admin user can edit the role of a existing user
        Given user has logged into the ui as an admin
        And admin user has navigated to the Users page
        When admin user updates a existing user's role
            | name | email | role |
            |      |       |      |
        Then The new user role is saved

    @TEST-174
    Scenario: An non admin user can not edit user detail
        Given user has logged into the ui without admin access
        When user navigate to the Users page
        Then The details are displayed as view only


    
    Scenario: A new user cannot be added with a invalid email
        Given user has logged into the ui as an admin
        And admin user has navigated to the Users page
        When admin user add a new user with a invalid email address
            | name | email | role |
            |      |       |      |
        Then the record is not saved

    Scenario: A duplicate user cannot be added
        Given user has logged into the ui as an admin
        And admin user has navigated to the Users page
        When admin user add a new user with a valid email address already used
            | name | email | role |
            |      |       |      |
        Then the expected validation error is displayed
        And the record is not saved
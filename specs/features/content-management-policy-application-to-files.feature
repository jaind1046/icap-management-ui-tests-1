@content-management-policy-application-to-files
Feature: content-management-policy-application-to-files
    As a admin I need to validate that a set Content Management policy is correct applied to processed files in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
        Given I am on current policy screen

    @TEST-
    Scenario Outline: Content Management policy is correctly applied to processed files
        Given I set a policy with the <contentFlags> set to <flagType> for a file type <fileType>
        When I process file <File> through the icap server
        Then the file processing outcome is <fileOutcome>
        Examples:
            | contentFlags   | flagType   | fileType   | File | fileOutcome |
            | embeddedFiles  | sanitise   | word       |      | sanitised   |
            | hyperlink      | disallowed | png        |      | htmlReport  |
            | reviewComments | sanitise   | excel      |      | sanitised   |
            | embeddedImages | disallowed | powerpoint |      | htmlReport  |
            | acroform       | sanitise   | pdf        |      | sanitised   |


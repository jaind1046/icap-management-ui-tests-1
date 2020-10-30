Feature: content-management-policy-application-to-files
    As a admin I need to validate that a set Content Management policy is correct applied to processed files in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
        Given I am on current policy screen

    @TEST-
    Scenario Outline: Content Management policy is correct applied to processed files
        Given I set the policy action <policy> for a file type <fileType> 
        When I process <File>
        Then the file processing outcome is <fileOutcome>
        Examples:
           | File | fileType   | ContentFlags   | FlagType | fileOutcome | 
           |      | word       | embeddedFiles  | sanitise |             |       
           |      | excel      | reviewComments | disallow |             |   
           |      | powerpoint | embeddedImages | disallow |             |   
           |      | pdf        | acroform       | sanitise |             |   


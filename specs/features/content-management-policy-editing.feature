@content-management-policy-editing
Feature: Content Management Policy Editing

As a admin I need to validate that policy content flags can be edited in order to confirm that the solution works as expected

    Background:
        Given I am logged into the portal
        Given I am on current policy screen


    @TEST-153
    Scenario: A user selecting the "Current Policy" in the navigation panel will be taken to the current policy page
        When I click on Current Policy in the navigation panel
        Then I am taken to the current policy page

    @smoke
    @TEST-188 
    Scenario Outline: A user can cancel any updates that they have done to the policy by pressing cancel
        When I change one of the <ContentFlags> for required file types <fileType> to <FlagType>
        When I press the Cancel button
        Then the Current policy defaults to the latest saved policy
        Examples:
            | fileType   | ContentFlags    | FlagType |
            | word       | embeddedFiles   | sanitise |
          

    
    @TEST-155
    Scenario Outline: I can edit policy content flags
        When I change one of the <ContentFlags> for required file types <fileType> to <FlagType>
        When I press the Save button
        Then <ContentFlags> for required file types <fileType> is set to <FlagType>
        When I click on the previous policy button
        Then the previous policy can now be located in the Policy history page
        Examples:
            | fileType   | ContentFlags    | FlagType |
            | word       | embeddedFiles   | sanitise |
            | excel      | reviewComments  | disallow |
            | powerpoint | embeddedImages  | disallow |
            | pdf        | acroform        | sanitise |

    @smoke
    @TEST-Change-all-content-flag-for-all-doc-type
    Scenario Outline: A user is able to change the content flags to sanitise for word in policy page
        When I change all the flag for <fileType> to sanitise on policy page
        Then all flags of the <fileType> is changed to sanitise
        When I change all the flag for <fileType> to disallow on policy page
        Then all flags of the <fileType> is changed to disallow
        Examples:
            | fileType   |
            | word       |
            | excel      |
            | powerpoint |
            | pdf        |

  As a admin I need to validate that policy content flags can be edited in order to confirm that the solution works as expected

  Background:
    Given I am logged into the portal
    Given I am on current policy screen


  @TEST-153
  Scenario: A user selecting the "Current Policy" in the navigation panel will be taken to the current policy page
    When I click on Current Policy in the navigation panel
    Then I am taken to the current policy page


  @TEST-188
  Scenario Outline: A user can cancel any updates that they have done to the policy by pressing cancel
    When I change one of the <ContentFlags> for required file types <FileType> to <ChangedFlagType>
    And I press the Cancel button
    Then The <ContentFlags> for file types <FileType> defaults to <CurrentFlagType>
    Examples:
      | FileType   | ContentFlags    | CurrentFlagType    | ChangedFlagType |
      | word       | embeddedFiles   | disallow           | sanitise        |



  @TEST-155
  Scenario Outline: I can edit policy content flags
    When I change one of the <ContentFlags> for required file types <FileType> to <FlagType>
    And I press the Save button
    Then The <ContentFlags> for required file types <FileType> is set to <FlagType>
    Examples:`
      | FileType   | ContentFlags         | FlagType |
      | word       | embeddedFiles        | sanitise |
      | excel      | externalHyperlinks   | disallow |
      | powerpoint | metadata             | disallow |
      | pdf        | actionsAll           | sanitise |


  @TEST-Change-all-content-flag-for-all-doc-type
  Scenario Outline: A user is able to change all content flags for all file type in policy page
    When I change all the flag for <FileType> to <FlagType> on policy page
    Then All flags of the <FileType> is changed to <FlagType>
    Examples:
      | FileType      | FlagType |
      | word          | sanitise |
      | word          | disallow |
      | excel         | sanitise |
      | excel         | disallow |
      | excel         | sanitise |
      | excel         | disallow |
      | pdf           | sanitise |
      | pdf           | disallow |


Feature: file-drop-file-processing
    As a admin I need to validate the successful file processing by the File Drop service and error notification for unprocessed files in order to confirm that the solution works as expected


    Background:
        Given I am logged into the ui
        And I have navigated to the FileDrop page

    @TEST-176
    Scenario Outline: I can load a file into the file drop service
        When I click Select a file and choose a supported file <supportedFile>
        Then the File is processed by the file drop service
        And I can view more detailed results with file attibutes <fileName> and <type>
        Examples:
            | supportedFile        | fileName    | type |
            | src/data/input/issues.docx | issues.docx | docx |

    @TEST-182
    Scenario Outline: An error message is produced when file drop is unable to process a file
        When I click Select a file and choose non processable file <unsupportedFile>
        Then the expected validation error is displayed as <error>
        Examples:
            | unsupportedFile       | error                                                                  |
            | src/data/input/icaptest.ps1 | Please use a supported file type |
            | src/data/input/40MB.docx | This free service is currently limited to a maximum file size of 3.5MB |

    
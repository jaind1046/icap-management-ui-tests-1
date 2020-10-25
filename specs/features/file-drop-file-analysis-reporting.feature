Feature: file-drop-file-analysis-reporting
    As a admin I need to validate the successful download of a PDF or XML analysis report in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
        And I have navigated to the File Drop page

    @TEST-178
    Scenario: I can download the full XML analysis report for a file
        Given I have processed a supported file <supportedFile>
        When I click on XML
        Then the full XML report <xmlFile> is downloaded
        Examples:
            | supportedFile             | xmlFile  |
            | src/data/input/file1.docx | file1.xml |

    @TEST-181
    Scenario: I can download the full PDF analysis report for a file
        Given I have processed a supported file <supportedFile>
        When I click on PDF
        Then the full pdf report <pdfFile> is downloaded
        Examples:
            | supportedFile             | pdfFile   |
            | src/data/input/file1.docx | file1.pdf |

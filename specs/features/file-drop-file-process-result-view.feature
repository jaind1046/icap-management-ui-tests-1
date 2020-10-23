Feature: file-drop-file-process-result-view
    As a admin I need to validate the processed file result view in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
        Given I have navigated to the File Drop page

    @TEST-177
    Scenario Outline: I can download the full analysis report of a processed file
        Given I have processed a supported file <supportedFile>
        When I view result and click on Download Analysis Report
        Then The full analysis report is downloaded and available as <analysisReport>
        Examples:
            | supportedFile              | analysisReport                  |
            | src/data/input/issues.docx | issues.docx.xml |

    Scenario Outline: I can view the details of a file that has been processed by the file drop service
        When I process a supported file <supportedFile>
        Then The results shows the file attibutes <fileName>, <type> and <fileSize>
        Examples:
            | supportedFile              | fileName    | type | fileSize |
            | src/data/input/issues.docx | issues.docx | docx | 11603    |

    Scenario Outline: I can view the issues removed on a processed file
        When I process a supported file <supportedFile> with sanitisation and remedy items
        Then I see report on sanitised active content <activeContentList>
        And I see report on objects and structures repaired <repairedObjectsList>
        Examples:
            | supportedFile             | activeContentList                   | repairedObjectsList               |
            | src/data/input/file1.docx | src/data/input/file1-active-content | src/data/input/file1-remedy-items |


    Scenario Outline: I can view the unrepaired structural issues on a processed file
        When I process a supported file <supportedFile> with structural Issues
        Then I see report on objects and structures not repaired <nonrepairedObjectsList>
        Examples:
            | supportedFile             | nonrepairedObjectsList                          |
            | src/data/input/file2.docx | src/data/input/file2-norepair-structural-issues |


    Scenario Outline: I can download successfully processed files
        Given I have processed a supported file <supportedFile>
        When I click on Download Processed File
        Then I have the file successfully downloaded as <downloadedFileName>
        And I can successfully open the downloaded file
        Examples:
            | supportedFile              | downloadedFileName          |
            | src/data/input/issues.docx | src/data/output/issues.docx |
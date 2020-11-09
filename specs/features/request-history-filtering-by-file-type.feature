@request-history-filtering-by-file-type
Feature: request-history-filtering-by-file-type
    As a admin I need to validate file requests history filtering by file extension in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui
    
    
    @TEST-163_164_165_180
    Scenario Outline: I can filter the log by file type
        Given I have navigated to the Request History page
        When I click on the Add Filter button and add a file type filter as '<filter>'
        Then the result list only shows files with the selected types as '<filteredFile>'
        Examples:
            | filter        | filteredFile |
            | FileType_DOCX | DOCX         |
            | FileType_DOC  | DOC          |
            | FileType_DOCM | DOCM         |
            | FileType_DOT  | DOT          |
            | FileType_XLSX | XLSX         |
            | FileType_XLS  | XLS          |
            | FileType_XLSM | XLSM         |
            | FileType_PPT  | PPT          |
            | FileType_PPTX | PPTX         |
            | FileType_JPEG | JPEG         |
            | FileType_PNG  | PNG          |
            | FileType_GIF  | GIF          |
            | FileType_PDF  | PDF          |






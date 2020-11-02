@dashboard-requests-filtering-by-file-risk
Feature: dashboard-requests-filtering-by-file-risk
    As a admin I need to validate file requests filtering by risk in order to confirm that the solution works as expected

    Background:
        Given I am logged into the ui


    @TEST-192
    Scenario Outline: I can filter the risk legend
        Given I have navigated to the analytics page
        When I filter in the file risk <fileRisk>
        Then the chart is updated to only show the risk <filteredRisk>
        Examples:
            | fileRisk     | filteredRisk |
            | Safe         | Safe         |
            | Blocked      | Blocked      |
            | Dangerous    | Dangerous    |
            | Unclassified | Unclassified |


# @TEST
# Scenario Outline: I can remove file-outcomes from the filters on the charts
#     Given I have navigated to the analytics page
#     When I click from <chart> on <fileRisk>
#     Then the chart is updated to remove <fileRisk>
#     Examples:
#         | chart      | fileOutcome  |
#         | line graph | Safe         |
#         | line graph | Blocked      |
#         | line graph | Dangerous    |
#         | line graph | Checked      |
#         | line graph | Unclassified |


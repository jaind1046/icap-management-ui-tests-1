const {
    I,
    policyPage
} = inject();

Given('the user clicks on Policy History in the navigation panel', () => {
    I.goToPolicy()
    I.wait(1)
    policyPage.clickOnHistoryPolicyTab()
});

Given('I am on the Policy History page', () => {
    policyPage.clickOnHistoryPolicyTab()
});

Then('I am taken to the Policy History page', () => {
    policyPage.assertHistoryPolicyPage()
});

Then('the previous policy can now be located in the "Policy history" page', () => {
    policyPage.clickOnHistoryPolicyTab()
});

Then('the user is taken to the Policy History page', () => {
    policyPage.assertHistoryPolicyPage()
});

Given('I have navigated to the Policy History page and there are more than {int} policies in the history', (count) => {
    policyPage.clickOnHistoryPolicyTab()
    policyPage.assertNumberOfRecordsOfPolicy(count)
});

When(/^Items Shown is changed to (.*)$/, (itemCount) => {
    policyPage.selectCountOfPolicies(itemCount)
});

Then('up to {int} previous policies are displayed', (itemCount) => {
    policyPage.assertPoliciesItemShownCount(itemCount)
});
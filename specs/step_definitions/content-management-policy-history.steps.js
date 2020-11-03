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

Given(/^I have navigated to the Policy History page and there are more than (.*) policies in the history$/, (count) => {
    policyPage.clickOnHistoryPolicyTab()
    policyPage.assertNumberOfRecordsOfPolicy(count)
});

// TODO implement this when app has records
When(/^Items Shown is changed to (.*)$/, (itemCount) => {
});

// TODO implement this when app has records
Then(/^up to (.*) previous policies are displayed$/, (fileCount) => {
});
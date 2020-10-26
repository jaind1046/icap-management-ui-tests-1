const {
    I,
    policyPage
} = inject();

Given('the user clicks on Policy History in the navigation panel', () => {
    I.goToPolicy()
    I.wait(1)
    policyPage.clickOnHistoryPolicyTab()
});

When('I click on Policy History in the navigation panel', () => {
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
const {
    I,
    policyPage
} = inject();


When(/^the user change all the flag for (.*) to sanitise on policy page$/, (fileType) => {
    policyPage.clickSanitiseForAllFlagForDoc(fileType)
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to sanitise$/, (fileType) => {
    policyPage.assertSanitiseForAllFlag(fileType)
});

When(/^the user change all the flag for (.*) to disallow on policy page$/, (fileType) => {
    policyPage.clickDisallowForAllFlag(fileType)
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to disallow$/, (fileType) => {
    policyPage.assertDisallowForAllFlag(fileType)
});

When('I click view on a previous policy', () => {
    policyPage.clickOnCurrentPolicyTab()
});

Then('the user is taken to the current policy page', () => {
    policyPage.assertCurrentPolicyPage()
});

When('the user presses the Cancel button', () => {
    policyPage.clickCancelChanges()
});

When('user click the delete button', () => {
    policyPage.clickDeleteApiUrl()
});

When('I have entered an invalid URL into the "API URL" box', () => {
    policyPage.enterTextInApiUrl("INVALID TEXT")
});

When('I have entered an valid URL into the "API URL" box', () => {
    policyPage.enterTextInApiUrl("validsolutions.com")
});

When('the save button is selected', () => {
    policyPage.clickSaveApiUrl()
});
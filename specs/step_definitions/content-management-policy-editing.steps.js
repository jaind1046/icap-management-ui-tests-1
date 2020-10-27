const {
    I,
    policyPage,
    loginPage,
    homePage,
    env
} = inject();

Given('I am logged into the portal', () => {
    I.onLoginPage()
    I.wait(2)
    loginPage.loginWith(env.qa.email, env.qa.password);
});

Given('I am on current policy screen', () => {
    homePage.clickPolicy()
});

When(/^I change one of the (.*) for required file types (.*) to (.*)$/, (contentFlag, fileType, flagType) => {
    policyPage.setFlagTypeForGivenContentFlagsForGivenDocType(contentFlag, fileType, flagType)
});

Then(/^(.*) for required file types (.*) is set to (.*)$/, (contentFlag, fileType, flagType) => {
    policyPage.assertFlagTypeForGivenContentFlagsForGivenDocType(contentFlag, fileType, flagType)
});

When(/^I change all the flag for (.*) to sanitise on policy page$/, (fileType) => {
    policyPage.clickSanitiseForAllFlag(fileType)
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to sanitise$/, (fileType) => {
    policyPage.assertSanitiseForAllFlag(fileType)
});

When(/^I change all the flag for (.*) to disallow on policy page$/, (fileType) => {
    policyPage.clickDisallowForAllFlag(fileType)
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to disallow$/, (fileType) => {
    policyPage.assertDisallowForAllFlag(fileType)
});

When('I click on Current Policy in the navigation panel', () => {
    policyPage.clickOnCurrentPolicyTab()
});

Then('I am taken to the current policy page', () => {
    policyPage.assertCurrentPolicyPage()
});

When('I press the Cancel button', () => {
    policyPage.clickCancelChanges()
});

When('I press the Save button', () => {
    policyPage.clickSaveChanges()
});

// TODO Needs to fix this
When('I click on the previous policy button', () => {
    // policyPage.clickPrevious()
});

When('I click the delete button', () => {
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

// TODO while working on previous policy screen
Then('the previous policy can now be located in the Policy history page', () => {
});

// TODO How we will make sure this
Then('the Current policy defaults to the latest saved policy', () => {
});
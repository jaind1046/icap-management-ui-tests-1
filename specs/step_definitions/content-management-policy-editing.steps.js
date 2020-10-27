const {
    I,
    policyPage,
    loginPage,
    homePage,
    env
} = inject();

const fileTypeFieldTypeMap = {
    Word : 'word',
    Excel: 'excel',
    Powerpoint: 'powerpoint',
    PDF: 'pdf'
}

const flagTypeFieldTypeMap = {
    Sanitise : 'sanitise',
    Disallow: 'disallow'
}

const contentFlagTypeFieldTypeMap = {
    'Embedded Files' : 'embeddedFiles',
    'Review Comments': 'reviewComments',
    'Embedded Images': 'embeddedImages',
    'Acroform': 'acroform',
    'External Hyperlinks': 'externalHyperlinks',
    'Internal Hyperlinks': 'internalHyperlinks',
    'Actions All': 'actionsAll'
}

Given('I am logged into the portal', () => {
    I.onLoginPage()
    I.wait(2)
    loginPage.loginWith(env.qa.email, env.qa.password);
});

Given('I am on current policy screen', () => {
    homePage.clickPolicy()
});

When(/^I change one of the (.*) for required file types (.*) to (.*)$/, (contentFlag, fileType, flagType) => {
    policyPage.setFlagTypeForGivenContentFlagsForGivenDocType(contentFlagTypeFieldTypeMap[contentFlag],
        fileTypeFieldTypeMap[fileType],
        flagTypeFieldTypeMap[flagType])
});

Then(/^(.*) for required file types (.*) is set to (.*)$/, (contentFlag, fileType, flagType) => {
    policyPage.assertFlagTypeForGivenContentFlagsForGivenDocType(contentFlagTypeFieldTypeMap[contentFlag],
        fileTypeFieldTypeMap[fileType],
        flagTypeFieldTypeMap[flagType])
});

When(/^I change all the flag for (.*) to sanitise on policy page$/, (fileType) => {
    policyPage.clickSanitiseForAllFlag(fileTypeFieldTypeMap[fileType])
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to sanitise$/, (fileType) => {
    policyPage.assertSanitiseForAllFlag(fileTypeFieldTypeMap[fileType])
});

When(/^I change all the flag for (.*) to disallow on policy page$/, (fileType) => {
    policyPage.clickDisallowForAllFlag(fileTypeFieldTypeMap[fileType])
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to disallow$/, (fileType) => {
    policyPage.assertDisallowForAllFlag(fileTypeFieldTypeMap[fileType])
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

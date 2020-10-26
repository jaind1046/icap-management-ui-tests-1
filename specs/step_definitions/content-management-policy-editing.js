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

Given('I am logged into the portal', () => {
    I.onLoginPage();
    I.wait(2)
    console.log(env.qa)
    loginPage.loginWith(env.qa.email, env.qa.password);
});

Given('I am on current policy screen', () => {
    homePage.clickPolicy()
});

When(/^the user change all the flag for (.*) to sanitise on policy page$/, (fileType) => {
    policyPage.clickSanitiseForAllFlag(fileTypeFieldTypeMap[fileType])
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to sanitise$/, (fileType) => {
    policyPage.assertSanitiseForAllFlag(fileTypeFieldTypeMap[fileType])
});

When(/^the user change all the flag for (.*) to disallow on policy page$/, (fileType) => {
    policyPage.clickDisallowForAllFlag(fileTypeFieldTypeMap[fileType])
    policyPage.clickSaveChanges()
});

Then(/^all flags of the (.*) is changed to disallow$/, (fileType) => {
    policyPage.assertDisallowForAllFlag(fileTypeFieldTypeMap[fileType])
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
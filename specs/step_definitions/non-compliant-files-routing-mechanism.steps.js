const {I, policyPage}= inject();

let currentUrl = null;

Given('I have navigated to the Current Policy page',  () => {
    I.goToContentManagementPolicy();
});
Given('I am a new user', () => {
    I.loginNoPwd();
});
Then(`I see the default set routing option for unprocessable files as ''`,  () =>{
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.unprocessedFileBlock);
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.unprocessedFileRelay);
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.unprocessedFileRefer);
});
Then(`I see the default set routing option for blocked files as ''`,  () => {
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.blockedFileBlock);
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.blockedFileRefer);
    I.dontSeeCheckboxIsChecked(policyPage.radiobuttons.blockedFileRelay);
});
When('I enter a valid URL {string} into the API URL box',  (url) =>{
    currentUrl = url;
    policyPage.enterTextInApiUrl(url);
});
When('I click save',  () => {
    policyPage.clickSaveApiUrl();
});
Then('the API URL is updated and the validation message {string} is displayed',  (message) => {
    I.seeInField(policyPage.fields.validateApiUrlInput, currentUrl);
    I.see(message);
});
When('I change the route for blocked or unprocessable files to {string} and save',  (routeOption) => {
    I.checkBlockedRouteRadio(routeOption);
});
Then('the route selection is applied as {string}',  (updatedRouteOption) => {
    policyPage.assertCheckedBlockedRadioButton(updatedRouteOption);
});
Given('I have set the routing option for Glasswall Blocked files to {string}',  (blockedPolicyAction) => {
    policyPage.checkBlockedRouteRadio(blockedPolicyAction);
});
Given('the non-compliant file service has been defined as {string}',  (NcfsDecision) => {

});
When('I submit a non compliant file {string} through the icap server',  (file) => {
    I.goToFileDrop();
    I.uploadFile(file);
    I.wait(5);
});
When('the file outcome status is blocked',  () => {

});
Then('the response code received is {string}', (responseCode) => {
    I.waitForResponse(response =>
        response.request().url.contains('/api/decide') &&
        response.request().method === 'POST' &&
        response.request().statusCode === responseCode);

});
Then('the file outcome for the submitted file is {string}', (fileOutcome) => {
    filedropPage.clickViewResult();
    I.see(fileOutcome);
});
Given('I have set the routing option for unprocessable files to {string}', (fileTypePolicyAction) => {
    policyPage.checkUnprocessableRouteRadio(fileTypePolicyAction);
});
When('I submit a unprocessable file {string} through the icap server', (file) => {
    I.goToFileDrop();
    I.uploadFile(file);
    I.wait(5);
});
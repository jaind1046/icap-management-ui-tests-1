const {
    I,
    policyPage
} = inject();

const VALID_API_URL = '';
const INVALID_API_URL = '';
const apiUrlInput = policyPage.fields.validateApiUrlInput;

let currentUrl;
let blockedRouteRadio;
let unprocessableRouteRadio;

Given('I have navigated to the Current Policy page and have entered a valid URL into the API URL box', () => {
    I.goToContentManagementPolicy();
    I.fillField(VALID_API_URL, apiUrlInput)
});
When('I click save', () => {
    policyPage.clickSaveApiUrl()
});
Then('the API URL is updated and a validation message is displayed', () => {
    I.seeInField(apiUrlInput, VALID_API_URL);
    //todo: check validation message after it is implemented
});
Given('I have navigated to the Current Policy page and have entered an invalid URL into the API URL box', () => {
    I.goToContentManagementPolicy();
    currentUrl = I.grabValueFrom(apiUrlInput);
    I.fillField(INVALID_API_URL, apiUrlInput)
});
Then('the API URL is not updated and an error message is displayed', () => {
    I.seeInField(apiUrlInput, currentUrl)
});
Given('I have navigated to the Current Policy page', () => {
    I.goToContentManagementPolicy();
});
When('I change the route for Glasswall Blocked Files to {string} and save', (glasswallBlockedRoute) => {
    blockedRouteRadio = policyPage.checkBlockedRouteRadio(glasswallBlockedRoute);
    //  policyPage.clickSaveChanges(); //is not implemented now
});
Then('the Glasswall Blocked file type route is updated', () => {
    I.seeCheckboxIsChecked(blockedRouteRadio);
});
Then('an Glasswall Blocked file is directed according to {string}', (glasswallBlockedFileOutcome) => {
//todo
});
When('I change the route for un-processable file types to {string} and save', (unprocessableRoute) => {
    unprocessableRouteRadio = policyPage.checkUnprocessableRouteRadio(unprocessableRoute);
});
Then('the un-processable file type route is updated', () => {
    I.seeCheckboxIsChecked(unprocessableRouteRadio);
});
Then('an un-processable file is directed according to {string}', (unprocessableFileOutcome) => {
//todo
});
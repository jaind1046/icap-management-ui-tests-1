const {
    I,
    policyPage
} = inject();

When('I click activate on a previous policy', () => {
    policyPage.clickActivate()
});

When('I click view on a previous policy', () => {
    policyPage.clickView()
});

Then('the previous Policy is displayed', () => {
    policyPage.assertNumberOfOpenTab(2)
});

// TODO needs to finish when functionality available
Then('the previous Policy is activated', () => {
});


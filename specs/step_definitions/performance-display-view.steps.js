//<reference path="./steps.d.ts" />

var assert = require('assert')

const {I} = inject();

Given('the user has logged into the ui', () => {
   I.loginNoPwd();
    I.wait(5);
});

When('the user clicks on Dashboard in the navigation panel', () => {
   // I.enterValidCredential();
});

Then('the user is taken to the Dashboard page', () => {
    //I.seeElement('#mainMenu');
});
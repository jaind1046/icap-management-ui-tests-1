const homePage = require("../pages/home.page.js");
const loginPage = require("../pages/login.page.js");
const policyPage = require("../pages/policy.page.js");
const filedropPage = require("../pages/file-drop.page.js");

module.exports = function () {
    return actor({
        onLoginPage: function () {
            this.amOnPage("https://k8-proxy.github.io/p-ui-wireframes/");
        },

        loginNoPwd: function () {
            this.onLoginPage();
            loginPage.clickLogIn();
            this.wait(5);
        },

        enterValidCredential: function () {
            loginPage.loginWith(env.qa.email, env.qa.password);
        },
        enterInvalidPassword: function () {
            loginPage.setPassword(faker.random.number());
        },

        goToPasswordResetPage: function () {
            this.click(loginPage.clickForgotPasswordLink());
        },

        goToAnalytics: function () {
            homePage.clickAnalytics();
        },

        goToFileDrop: function () {
            homePage.clickFileDrop();
            I.seeElement(filedropPage.buttons.fileSelectButton)
        },

        goToUsers: function () {
            homePage.clickUsers();
        },

        goToRequestHistory: function () {
            homePage.clickRequestsHistory();
        },

        goToContentManagementPolicy: function () {
            homePage.clickPolicy();
        },

        goToPolicyHistory: function () {
            homePage.clickPolicy();
            policyPage.clickHistoryTab();
        },

        uploadFile: function (file) {
            this.attachFile(filedropPage.buttons.fileInput, file)
            this.waitForElement(filedropPage.sections.analysisReportView,30)
        },

        uploadFileByType: function (fileType) {
            let path = null;
            switch (fileType) {
                case ('Safe_file'):
                    path = 'src/data/input/types/safe_file.xlsx';
                    break;
                case ('Blocked_file'):
                    path = 'src/data/input/types/blocked_file.doc';
                    break;
                //todo: add file
                case ('Dangerous_file'):
                    path = 'src/data/input/types/dangerous_file.doc';
                    break;
                //todo: add file
                case ('Unclassified_file'):
                    path = 'src/data/input/types/unclassified_file.doc';
                    break;
                default:
                    throw 'There is not such file type.'
            }
            this.uploadFile(path);
        }
    });
};

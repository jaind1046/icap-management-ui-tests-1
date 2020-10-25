const homePage = require("./src/pages/home.page.js");
const loginPage = require("./src/pages/login.page.js");
const policyPage = require("./src/pages/policy.page.js");
const filedropPage = require("./src/pages/file-drop.page.js");

module.exports = function () {
  return actor({
    onLoginPage: function () {
      this.amOnPage("http://localhost:3000");
    },

    loginNoPwd: function () {
      this.onLoginPage();
      loginPage.clickLogIn();
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

    goToDashboard: function () {
      homePage.clickDashboard();
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

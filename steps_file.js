
const homePage = require('./src/pages/home.page.js')
const loginPage = require('./src/pages/login.page.js')

module.exports = function() {
  return actor({

    loginNoPwd: function () {
      this.amOnPage('https://github.com/k8-proxy/p-ui-wireframes')
      loginPage.clickLogIn();
    },
    onLoginPage: function() {
      this.amOnPage('https://github.com/k8-proxy/p-ui-wireframes')
    },
    enterValidCredential: function () {
      loginPage.loginWith(env.qa.email,env.qa.password)
    },
    enterInvalidPassword: function () {
      loginPage.setPassword(faker.random.number())
    }
  });
}

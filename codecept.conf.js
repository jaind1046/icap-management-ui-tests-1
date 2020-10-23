const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true,
      windowSize: '1536 x 826',
        chrome: {
          args: ['--no-sandbox', '--window-size=1536,826'],
        }
      },
      FileSystem: {},
      AssertWrapper: {
        require: "codeceptjs-assert"
      }
  },
  include: {
    I: './steps_file.js',
    homePage: './src/pages/home.page.js',
    loginPage: './src/pages/login.page.js',
    configurationsPage: './src/pages/configurations.page.js',
    dashboardPage: './src/pages/dashboard.page.js',
    filedropPage: './src/pages/file-drop.page.js',
    passwordResetPage: './src/pages/password-reset.page.js',
    policyPage: './src/pages/policy.page.js',
    requesthistoryPage: './src/pages/request-history.page.js',
    usersPage: './src/pages/users.page.js'
  },
  bootstrap: null,
  gherkin: {
    features: './specs/features/*.feature',
    steps: './specs/step_definitions/*.js'
  },
  mocha: {},
  name: 'icap-management-ui-tests',
  plugins: {
    allure: {},
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    },
  }
}
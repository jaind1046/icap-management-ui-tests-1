const {
  I
} = inject();

module.exports = {


  //locators
  fields: {
    email: `input[id='Email']`,
    password: `input[id='Password']`,
    loginError: 'validation-error'
  },
  links: {
    passwordReset: `a[id='forgotPasswordLink']`,
    accountActivation: `a[id='accountActivationLink']`,
  },
  buttons: {
    login: `button[class*='Button_button__1V1sR']`,
    terms: `button[id='loginTermsButton']`,
    localeDev: `button[class*='locale-dev']`,
    localeStage: `button[class*='locale-stage']`,
    localePerf: `button[class*='locale-perf']`,
    localeQa: `button[class*='locale-qa1']`,
    localePent: `button[class*='locale-pent']`,
    closeLoginTerms: `button[id='closeLoginTerms']`,
    modalClose: `button[class*='modal-close-button']`
  },
  lists: {
    locale: `button[id='currentLocale']`
  },

  //Methods

  /*
   * EmailAddress
   * ***************************************************************
   */
  setEmailAddress(value) {
    const element = this.fields.email;
    I.fillField(element, value); 
  },

  /*
   * Password
   * ***************************************************************
   */
  setPassword(value) {
    const element = this.fields.password;
    I.fillField(element, value);
  },

  clickForgotPasswordLink() {
    const element = this.links.passwordReset;
    I.click(element);
  },

  /*
   * LoginTerms
   * ***************************************************************
   */
  clickLoginTermsButton() {
    const element = this.buttons.terms;
    I.click(element);
  },

  clickCloseLoginTerms() {
    const element = this.buttons.closeLoginTerms;
    I.click(element);
  },

  clickModalclosebutton() {
    const element = this.buttons.modalClose;
    I.click(element);
  },

  /*
   * LogIn
   * ***************************************************************
   */
  clickLogIn() {
    const element = this.buttons.login;
    I.click(element);
  },

  errorMsg() {
    let pin = I.grabTextFrom(this.fields.loginError);
  },
  
  loginWith(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
  },

  /*
   * AccountActivationLink
   * ***************************************************************
   */
  clickAccountActivationLink() {
    const element = this.links.accountActivation;
    I.click(element);
  },

  /*
   * CurrentLocale
   * ***************************************************************
   */
  clickCurrentLocale() {
    const element = this.lists.locale;
    I.click(element);
  },

  clickDev() {
    const element = this.buttons.localeDev;
    I.click(element);
  },

  clickQa1() {
    const element = this.buttons.localeQa;
    I.click(element);
  },

  clickStage() {
    const element = this.buttons.localeStage;
    I.click(element);
  },

  clickPerf() {
    const element = this.buttons.localePerf;
    I.click(element);
  },

  clickPent() {
    const element = locate(this.buttons.localePent);
    I.click(element);
  },

    

  


};
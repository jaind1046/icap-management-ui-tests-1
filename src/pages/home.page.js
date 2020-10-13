const {
  I
} = inject();

module.exports = {

  //Locators   

  fields: {

  },
  buttons: {
    accountPopupToggle: `button[id='accountPopupToggle']`,
    logout: `a[class*='log-out-button']`,
  },
  sections: {
    menu: '#mainMenu',
  },
  links: {
    transactionLog: `a[class*='transaction-log-link']`,
    fileReleaseRequests: `a[class*='file-release-link']`,
    policies: `a[class*='policies-link']`,
    configuration: `a[class*='config-link']`,
    users: '#mainMenu > .nav > ul > li > .users-link'
  },
  lists: {
    tenants: `div[class="tenant-menu-icon"]`
  },


  //Methods
  /*
   * MenuLinks
   * ***************************************************************
   */
  clickTransactionLog() {
    const element = this.links.transactionLog;
    I.click(element);
  },

  clickFileReleaseRequests() {
    const element = this.links.fileReleaseRequests;
    I.click(element);
  },

  clickPolicy() {
    const element = this.links.policies;
    I.click(element);
  },

  clickConfiguration() {
    const element = this.links.configuration;
    I.click(element);
  },
  clickUsers() {
    const element = this.links.users;
    I.click(element);
  },

  clickLogout() {
    const element = this.buttons.logout;
    I.click(element);
  },

  clickAccountToggle() {
    const element = this.buttons.accountPopupToggle;
    I.click(element);
  },

  /*
   * TenantList
   * ***************************************************************
   */
  getTenant(tenant) {
    return ("//button[contains(text(),'" + tenant + "')]")

  },
  openTenantList() {
    const element = this.lists.tenants;
    I.click(element);
  },

  selectTenant(tenant) {
    const element = this.getTenant(tenant);
    I.click(element);
  },

  getTenantName() {
    I.waitForPageLoad()
    I.grabTextFrom(this.lists.tenants)

  },

  selectRequiredTenant(tenant) {
    openTenantList()
    selectTenant(tenant)
  },







}
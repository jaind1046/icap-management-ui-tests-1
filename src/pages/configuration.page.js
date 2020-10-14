const { I } = inject();

module.exports = {
  //Locators

  fields: {
    domainNameInput: `div[class*='Input_Input__17Nwp'] > input`,
  },
  buttons: {
    nonCompliantFilesTab: `section[class*='TabNav_TabNav__2M5TN'] > ul > li:nth-of-type(1) > button`,
    systemSettingstab: `section[class*='TabNav_TabNav__2M5TN'] > ul > li:nth-of-type(2) > button`,
    validatedDomainTick: `div[class*='DomainField_validated__12o9V'] > svg:nth-of-type(1)`,
    addDomain: `div[class*='Config_header__3Goxc'] > button`,
    delete: `svg[id='Layer_1']`,
  },

  //Methods

  //NON COMPLIANT FILES
  /*
   * DomainsInput
   * ***************************************************************
   */
  async getAllowedDomainsValue() {
    const element = this.fields.domainNameInput;
    return await I.grabAttributeFrom(element, jsonValue());
  },
  setDomainsInput(value) {
    const element = this.fields.domainNameInput;
    I.fillField(element, value);
  },

  clickAdd() {
    const element = this.buttons.delete;
    I.click(element);
  },

  clickDelete() {
    const element = this.buttons.addDomain;
    I.click(element);
  },


  //SYSTEM SETTINGS

  

};

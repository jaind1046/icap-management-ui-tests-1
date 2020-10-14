const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {
        inputFilterFileID: `div[id='inputFilterTransactionID'] > input`,
        customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
    },
    buttons: {
        previousPage: `button[class*='previous']`,
        firstPage: `button[class*='first']`,
        nextPage: `button[class*='next']`,
        lastPage: `button[class*='last']`,
        go: `button[class*='custom-paginator-goto-button']`,
        addFilter: `button[id='addFilterButton']`,
        outcomeApply: `button[class*='outcome-apply-button']`,
    },
    calendar: {
        dateTimePicker: `input[class*='date-time-picker']`,
    },
    popups: {
        filterFileId: `div[id='filterMenuPopup'] > ul > li:nth-of-type(2) > button`,
        filterType: `div[id='filterMenuPopup'] > ul > li:nth-of-type(5) > button`,
        filterFileOutcomes: `div[id='filterMenuPopup'] > ul > li:nth-of-type(3) > button`,
        filterMenu: `div[id='filterMenuPopup']`
    },


    //Methods


    /*
     * Datetimepicker
     * ***************************************************************
     */
    async getDatetimepicker() {
        const element = this.calendar.dateTimePicker;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setDatetimepicker(value) {
        const element = this.calendar.dateTimePicker;
        I.fillField(element, value);
    },

    /*
     * AddingFilter
     * ***************************************************************
     */
    clickAddFilterButton() {
        const element = this.buttons.addFilter;
        I.click(element);
    },

    clickFrom() {
        const element = this.popups.filterFrom;
        I.click(element);
    },

    clickTo() {
        const element = this.popups.filterTo;
        I.click(element);
    },


    clickTransactionId() {
        const element = this.popups.filterTransactionId;
        I.click(element);
    },

    clickSubject() {
        const element = this.popups.filterSubject;
        I.click(element);
    },

    clickFileName() {
        const element = this.popups.filterFileName;
        I.click(element);
    },

    /*
     * SendersEmailAddress
     * ***************************************************************
     */

    async getSendersEmailAddress() {
        const element = this.fields.senderInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setSendersEmailAddress(value) {
        const element = this.fields.senderInput;
        I.fillField(element, value);
    },

    clickAddSender() {
        const element = this.buttons.addSender;
        I.click(element);
    },


    /*
     * FileOutcome
     * ***************************************************************
     */
    clickFileOutcomes() {
        const element = this.popups.filterFileOutcomes;
        I.click(element);
    },

    clickApplyOutcome() {
        const element = this.buttons.outcomeApply;
        I.click(element);
    },

    /*
     * FileId
     * ***************************************************************
     */
    setTransactionId(value) {
        const element = this.fields.inputFilterTransactionID;
        I.fillField(element, value);
    },

    clickAddTransactionid() {
        const element = this.buttons.addtransactionId;
        I.click(element);
    },


    /*
     * Pagination
     * ***************************************************************
     */
    clickFirst() {
        const element = this.buttons.firstPage;
        I.click(element);
    },

    clickPrevious() {
        const element = this.buttons.previousPage;
        I.click(element);
    },

    clickLast() {
        const element = this.buttons.lastPage;
        I.click(element);
    },

    clickPrevious() {
        const element = this.buttons.nextPage;
        I.click(element);
    },

    setCustomPage(value) {
        const element = this.fields.customPaginatorGoTo;
        I.fillField(element, value);
    },

    clickGo() {
        const element = this.buttons.go;
        I.click(element);
    },

}
const MyHelper = require("../utils/helper");
const moment = require('moment');

const {
    I
} = inject();

module.exports = {
    //Locators

    fields: {
        inputFilterFileID: `input[name='fileId']`,
        customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
    },
    options: {
        countOfFiles: "div[class*='Pagination_pageCountSelector__'] > select"
    },
    buttons: {
        filterArrow: `button[class*='Filters_arrow__']`,
        moreFilters: `button[class*='Filters_moreFilters__']`,
        addFilter: `button[data-test-id='addFilterButton']`,
        dateTime: `//button[contains(.,'Date/Time')]`,
        time_1hour: `li[data-range-key='1 Hour']`,
        time_12hours: '$12 Hours',
        time_24hours: '$24 Hours',
        customRange: '$Custom Range',
        apply: `button[class*='applyBtn']`,
        cancel: `button[class*='cancelBtn']`,
        deleteAppliedFilter: `button[class^='SelectedFilter_buttonClose__']`,
        fileTypeMenu: "button[data-test-id='buttonFilterFileTypes']",
        fileOutcomeMenu: "button[data-test-id='buttonFilterRisk']",
        fileOutcomeFilterSafe: "//span[contains(.,'Safe')]",
        fileOutcomeFilterBlockedByNCFS: "//span[contains(.,'Blocked By NCFS')]",
        fileOutcomeFilterBlockedByPolicy: "//span[contains(.,'Blocked By Policy')]",
        fileOutcomeFilterAllowedByPolicy: "//span[contains(.,'Allowed By Policy')]",
        fileOutcomeFilterAllowedByNCFS: "//span[contains(.,'Allowed By NCFS')]",
        fileIdAdd: "//button[contains(.,'+ ADD')]",
        fileIdMenu: "button[data-test-id='buttonFilterFileId']",
        gotoPage: "",
        previousPage: "",
        firstPage: "",
        nextPage: "",
        lastPage: "",
    },
    table: {
        historyTable1: `div[class*='RequestHistory_wrapTable__13V_o']`,
        fileTableBody1: `th[class*='MuiTableCell-root MuiTableCell-body']`,
        dataTransactionInfo: `//h2[contains(.,'No Transaction Data Found')]`,

        historyTable: `div[class*='RequestHistory_wrapTable__']`,
        fileTableBody: `tbody[class*='MuiTableBody-root']`,
        fileTableBodyRow: `tbody[class*='MuiTableBody-root'] > tr`


    },
    checkboxes: {
        fileTypeDoc: `//span[contains(.,'doc')]/parent::label/span[1]/span/input`,
        fileTypeDocx: `//span[contains(.,'docx')]/parent::label/span[1]/span/input`,
        fileTypeDocm: `//span[contains(.,'docm')]/parent::label/span[1]/span/input`,
        fileTypeDot: `//span[contains(.,'dot')]/parent::label/span[1]/span/input`,
        fileTypeXlsx: `//span[contains(.,'xlsx')]/parent::label/span[1]/span/input`,
        fileTypeXls: `//span[contains(.,'xls')]/parent::label/span[1]/span/input`,
        fileTypeXlsm: `//span[contains(.,'xlsm')]/parent::label/span[1]/span/input`,
        fileTypePpt: `//span[contains(.,'ppt')]/parent::label/span[1]/span/input`,
        fileTypePptx: `//span[contains(.,'pptx')]/parent::label/span[1]/span/input`,
        fileTypePdf: `//span[contains(.,'pdf')]/parent::label/span[1]/span/input`,
        fileTypePng: `//span[contains(.,'png')]/parent::label/span[1]/span/input`,
        fileTypeGif: `//span[contains(.,'gif')]/parent::label/span[1]/span/input`,
        fileTypeJpeg: `//span[contains(.,'jpeg')]/parent::label/span[1]/span/input`,
        fileTypeRtf: `//span[contains(.,'rtf')]/parent::label/span[1]/span/input`,
        fileTypeWmf: `//span[contains(.,'wmf')]/parent::label/span[1]/span/input`,
        fileTypeEmf: `//span[contains(.,'emf')]/parent::label/span[1]/span/input`,
        fileTypePe: `//span[contains(.,'Pe')]/parent::label/span[1]/span/input`,
        fileTypeMacho: `//span[contains(.,'Macho')]/parent::label/span[1]/span/input`,
        fileTypeElf: `//span[contains(.,'Elf')]/parent::label/span[1]/span/input`,
        fileTypeCoff: `//span[contains(.,'Coff')]/parent::label/span[1]/span/input`,
    },
    calendar: {
        dateTimePicker: `div[class*='daterangepicker']`,
        drp_calendar_left: `div[class*='drp-calendar left']`,
        drp_calendar_right: `div[class*='drp-calendar right']`,
        reportRange: `#reportrange > span`,
        drp_selected: `span.drp-selected`,
    },
    popup: {
        filterFileId: `button:nth-child(1) > p`,
        filterType: `div[class*='Filters_popup__'] > button:nth-child(3)`,
        filterFileOutcomes: `div[class*='Filters_popup__'] > button:nth-child(2)`,
        filterMenu: `div[class*='Filters_popup__']`,
    },
    containers: {
        appliedFilterFamily: `div[class^=SelectedFilter_SelectedFilter__]`,
        appliedFilters: `div[class*=Filters_filters__] > div`,
        appliedFiltersFooter: `div[class*='SelectedFilter_footer__'] > span`,
    },
    modal: {
        modalHeader: `section[class*='FileInfo_FileInfo__1Z457'] > header`,
        cmpDetailsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(5) > div > label`,
        issueItemsBanner: `.FileInfo_block__3_27q:nth-child(2) .MuiFormControlLabel-root`,
        sanitisationItemsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(3)`,
        remedyItemsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(4)`,
        fileDetailModal: `//section[2]/section/div`,
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

    openDatePicker() {
        const element = this.calendar.reportRange;
        I.click(element).catch(() => I.say(element + 'is not clickable'));
    },

    async selectTimePeriod(period) {
        try {
            if (period === '1 Hour') {
                await I.click(this.buttons.time_1hour).catch(() => I.say('unable to click period'));
            } else if (period === '12 Hours') {
                await I.click(this.buttons.time_12hours).catch(() => I.say('unable to click period'));
            } else if (period === '24 Hours') {
                await I.click(this.buttons.time_24hours).catch(() => I.say('unable to click period'));
            } else {
                I.say("Unable to find the required option");
            }
        }
        catch (e) {
            I.say('Action unsuccessul')
            console.warn(e);
        }
    },

    async getTimeFrom() {
        let startime = null;
        let range = await I.grabTextFrom(this.calendar.reportRange);
        startime = range.split("-")
        return startime;
    },

    async getTimeTo() {
        let endtime = null;
        let range = await I.grabTextFrom(this.calendar.reportRange);
        endtime = range.split("-")
        return startime;
    },

    setTimeTo(dateTo) {
        const element = this.calendar.dateTimePicker;
        within(element, () => {
            if (dateTo === 'current time') {
                I.type(this.getCurrentTime());
            } else {
                I.type(dateTo);
            }
        })
    },

    setTimeFrom(dateFrom) {
        const element = this.calendar.dateTimePicker;
        within(element, () => {
            if (dateFrom === '1 hour earlier') {
                I.type(this.getPastPeriod(1));
            } else if (dateFrom === '6 hours earlier') {
                I.type(this.getPastPeriod(6));
            } else if (dateFrom === '24 hours earlier') {
                I.type(this.getPastPeriod(24));
            } else {
                I.type(dateFrom);
            }
        })
    },


    setCustomRange(dateFrom, dateTo) {
        const start = this.setTimeFrom(dateFrom);
        const end = setTimeTo(dateTo);
        const range = moment.range(start, end);
        range.format()
    },

    async getSelectedRange() {
        const element = this.calendar.reportRange;
        await I.grabTextFrom(element);

    },


    getDateRange(start, end) {
        var time = null;
        if (end === 'current time') {
            time = moment();
        } else {
            time = datetimeTo
        }
        const currentTime = time.subtract(0, 'h').format('DD/MM/YYYY H:mm A')
        const timeFrom = time.subtract(start, 'h').format('DD/MM/YYYY H:mm A');
        const range = timeFrom + " - " + currentTime;
        return range.toString();

    },

    getCurrentTime() {
        var currentTime = moment();
        return currentTime;
    },

    getRequiredTime(datetimeTo) {
        let time = null;
        try {
            if (datetimeTo === 'current time') {
                time = this.getCurrentTime();
            } else {
                time = datetimeTo
            }
        } catch (e) {
            I.say('errors')
            console.warn(e);
        }
        return time;
    },

    getPastPeriod(time) {
        const now = this.getCurrentTime();
        const pastPeriod = now.subtract(time, 'h')
        return pastPeriod;
    },

    async isDataAvailable(range) {
        const table = this.table.fileTableBody;
        try {
            const element = await I.grabNumberOfVisibleElements(this.table.dataTransactionInfo);
            if (element) {
                I.say("No Transaction Data Found")
            } else {
                I.say("The table data is available")
            }
        } catch (e) {
            I.say('errors')
            console.warn(e);
        }
    },

    async isDataInRange(range) {
        try {
            I.waitForElement('th:nth-of-type(1)', 30)
            I.wait(5);
            let raws = await I.grabNumberOfVisibleElements('th:nth-of-type(1)')
            if (raws > 2) {
                I.say("Data is available")
                // for (let i = 2; i < raws; i++) {
                //     let timestamp = await I.grabTextFrom(`tr:nth-of-type(` + i + `) > th:nth-of-type(1)`);
                //     let parsed = moment(timestamp, 'DD/MM/YYYY').toDate()
                //     moment(parsed).isBetween(range.split("-"))
                // }
            } else { I.say(raws) }
        } catch (e) {
            I.say('errors')
            console.warn(e);
        }

    },



    /*
     * AddingFilter
     * ***************************************************************
     */
    clickAddFilterButton() {
        const element = this.buttons.addFilter;
        I.click(element);
    },
    clickMoreFiltersButton() {
        const element = this.buttons.moreFilters;
        //a bug: "more filters" button needs to be clicked twice
        I.click(element);
        I.click(element);
        I.wait(2);
        I.seeElement(this.buttons.addFilter);
    },
    setFileOutcome(outcome) {
        let outcomeType = null;
        const outcomeMenu = this.buttons.fileOutcomeMenu;
        I.click(outcomeMenu);
        if (outcome === "Safe") {
            outcomeType = this.buttons.fileOutcomeFilterSafe;
        } else if (outcome === "allowedByNCFS") {
            outcomeType = this.buttons.fileOutcomeFilterAllowedByNCFS;
        } else if (outcome === "allowedByPolicy") {
            outcomeType = this.buttons.fileOutcomeFilterAllowedByPolicy;
        } else if (outcome === "blockedByPolicy") {
            outcomeType = this.buttons.fileOutcomeFilterBlockedByPolicy;
        } else if (outcome === "blockedByNCFS") {
            outcomeType = this.buttons.fileOutcomeFilterBlockedByNCFS;
        } else {
            I.say("Unable to find the required option");
        }
        I.click(outcomeType);
    },

    clickFileTypeAdd() {
        const element = this.buttons.fileTypeMenu;
        I.click(element);
    },

    setFileId(value) {
        I.waitForElement(this.buttons.moreFilters, 30)
        I.click(this.buttons.moreFilters);
        I.waitForElement(this.buttons.addFilter, 30)
        I.click(this.buttons.addFilter);
        I.click(this.buttons.fileIdMenu);
        I.fillField(this.fields.inputFilterFileID, value);
        I.click(this.buttons.fileIdAdd);
    },

    filterByFileId(fileId) {
        this.setFileId(fileId);
        I.click(this.buttons.fileIdAdd);
    },

    setFileType(value) {
        const checkboxLabel = value.toUpperCase();
        let element = null;
        this.clickFileTypeAdd();
        switch (checkboxLabel) {
            case 'DOC':
                element = this.checkboxes.fileTypeDoc;
                break;
            case 'DOCX':
                element = this.checkboxes.fileTypeDocx;
                break;
                case 'DOCM':
                element = this.checkboxes.fileTypeDocm;
                break;
            case 'DOT':
                element = this.checkboxes.fileTypeDot;
                break;
            case 'XLS':
                element = this.checkboxes.fileTypeXls;
                break;
            case 'XLSX':
                element = this.checkboxes.fileTypeXlsx;
                break;
            case 'XLSM':
                element = this.checkboxes.fileTypeXlsm;
                break;
            case 'PPT':
                element = this.checkboxes.fileTypePpt;
                break;
            case 'PPTX':
                element = this.checkboxes.fileTypePptx;
                break;
            case 'JPEG':
                element = this.checkboxes.fileTypeJpeg;
                break;
            case 'GIF':
                element = this.checkboxes.fileTypeGif;
                break;
            case 'PNG':
                element = this.checkboxes.fileTypePng;
                break;
            case 'PDF':
                element = this.checkboxes.fileTypePdf;
                break;
            case 'RTF':
                element = this.checkboxes.fileTypeRtf;
                break;
            case 'WMF':
                element = this.checkboxes.fileTypeWmf;
                break;
            case 'EMF':
                element = this.checkboxes.fileTypeEmf;
                break;
            case 'PE':
                element = this.checkboxes.fileTypePe;
                break;
            case 'ELF':
                element = this.checkboxes.fileTypeElf;
                break;
            case 'COFF':
                element = this.checkboxes.fileTypeCoff;
                break;
            case 'MACHO':
                element = this.checkboxes.fileTypeMacho;
                break;
        }
        I.click(element);
    },

    selectCountOfFiles(itemCount) {
        const element = this.options.countOfFiles;
        I.selectOption(element, itemCount);
    },

    addFilterWithValue(filterWithValue) {
        if (filterWithValue===''){
            return;
        }
        const res = filterWithValue.split("_");
        const filterName = res[0];
        const filterValue = res[1];
        switch (filterName) {
            case 'FileOutcome':
                this.setFileOutcome(filterValue);
                break;
            case 'fileId':
                this.setFileId(filterValue);
                break;
            case 'FileType':
                this.setFileType(filterValue);
                break;
            default:
                throw "there is no such element";
        }
        I.wait(5);
    },

    async checkFilters(filteredFile) {
        const res = filteredFile.split("_");
        if (res.length === 1) {
            const filterValue = this.containers.appliedFiltersFooter;
            await this.checkFilterByValue(res[0], filterValue);
        } else {
            for (let i = 0; i< res.length; i++) {
                let filterValueLocator = `//div/span[contains(.,'` + res[i] + `')]`;
                await this.checkFilterByValue(res[i].toLowerCase(), filterValueLocator);
            }
        }
    },

    async checkFilterByValue(value, locator) {
        let filterValueText = (await I.grabTextFrom(locator)).toLowerCase();
        I.assert(value, filterValueText);
    },

    removeAppliedFilter(filterName) {
        const res = filterName.split("_");
        const filterValue = res[1];
        I.click(`//span[contains(., '` + filterValue+ `')]/parent::*/../div/button`);

    },
    checkFileValues(filteredFile) {
        const res = filteredFile.split("_");
        const row = locate('tbody').find('tr').find('td:nth-child(3)').toXPath();
        I.seeInField(row, res[1]);
    },
    async checkFileTypeValues(filteredFile) {
        const table = locate('tbody');
        const numberOfElements = await I.grabNumberOfVisibleElements(table.withChild('tr'));
        if (numberOfElements > 0) {
                const row = locate('tbody').find('tr').find('td:nth-child(3)').toXPath();
                const text = await I.grabTextFrom(row);
                I.assert(text, filteredFile);
        }
    },
   async checkFileRiskValues(filteredFile) {
        const table = locate('tbody');
        const numberOfElements = await I.grabNumberOfVisibleElements(table.withChild('tr'));
        if (numberOfElements > 0) {
            const row = locate('tbody').find('tr').find('td:nth-child(4)').toXPath();
            const text = await I.grabTextFrom(row);
            I.assert(text, filteredFile);
        }
    },
    closeFilterMenu() {
    I.moveCursorTo('#heading');
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

    clickNext() {
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

    /*
     * Opening file details
     * ***************************************************************
     */

    getFileRecord(fileId) {
        return "//tr[contains(., '" + fileId + "')]"
    },

    openFileRecord(fileId) {
        I.click(this.getFileRecord(fileId))
    },

    checkFileDetailViewId(fileId) {
        within(this.modal.modalHeader, () => {
            I.see(fileId);
        })
    }
};
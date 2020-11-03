const MyHelper = require("../utils/helper");
let moment = require('moment');
const {
    I
} = inject();

module.exports = {
    //Locators

    fields: {
        inputFilterFileID: `input[name='fileId']`,
        customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
        datetimeFrom: `#datetime-local-left`,
        datetimeTo: `#datetime-local-right`,
    },
    options: {
        countOfFiles: ""
    },
    buttons: {
        filterArrow: `button[class*='Filters_arrow__']`,
        moreFilters: `button[class*='Filters_moreFilters__']`,
        dateTime: `//button[contains(.,'Date/Time')]`,
        time_1hour: 'button:nth-child(1) > p',
        time_12hours: 'button:nth-child(2) > p',
        time_24hours: 'button:nth-child(3) > p',
        addFilter: `//button[contains(.,'+ Add Filter')]`,
        deleteAppliedFilter: `button[class^='SelectedFilter_buttonClose__']`,
        fileTypeMenu: "",
        fileOutcomeMenu: "",
        fileOutcomeFilterSafe: "//span[contains(.,'Safe')]",
        fileOutcomeFilterBlockedByNCFS: "//span[contains(.,'Blocked By NCFS')]",
        fileOutcomeFilterBlockedByPolicy: "//span[contains(.,'Blocked By Policy')]",
        fileOutcomeFilterAllowedByPolicy: "//span[contains(.,'Allowed By Policy')]",
        fileOutcomeFilterAllowedByNCFS: "//span[contains(.,'Allowed By NCFS')]",
        fileTypeMenuAdd: `div[class*='Filters_popup__'] > button:nth-child(1)`,
        fileIdAdd: "//button[contains(.,'+ ADD')]",
        fileIdMenu: "button:nth-child(3) > p",
        gotoPage: "",
        previousPage: "",
        firstPage: "",
        nextPage: "",
        lastPage: "",
    },
    table: {
        historyTable: `div[class*='RequestHistory_wrapTable__13V_o']`,
        fileTableBody: `tbody[class*='MuiTableBody-root']`,
    },
    checkboxes: {
        fileTypeDoc: `//span[contains(.,'doc')]/parent::label/span[1]/span/input`,
        fileTypeDocx: `//span[contains(.,'docx')]/parent::label/span[1]/span/input`,
        fileTypeXlsx: `//span[contains(.,'xlsx')]/parent::label/span[1]/span/input`,
        fileTypeXls: `//span[contains(.,'xls')]/parent::label/span[1]/span/input`,
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
        dateTimePicker: "",
    },
    popup: {
        filterFileId: `div[class*='Filters_popup__'] > button:nth-child(1)`,
        filterType: `div[class*='Filters_popup__'] > button:nth-child(3)`,
        filterFileOutcomes: `div[class*='Filters_popup__'] > button:nth-child(2)`,
        filterMenu: `div[class*='Filters_popup__']`,
    },
    containers: {
        appliedFilterFamily: `div[class^=SelectedFilter_SelectedFilter__]`,
        appliedFilters: `div[class*=Filters_filters__] > div`
    },
    modal: {
        modalHeader: `section[class*='FileInfo_FileInfo__1Z457'] > header`,
        cmpDetailsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(5) > div > label`,
        issueItemsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(2)`,
        sanitisationItemsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(3)`,
        remedyItemsBanner: `div[class*='FileInfo_inner__1NnWT'] > div:nth-of-type(4)`,
        fileDetailModal: `section[class*='Modal_Modal__9Stj1']`,
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

    openTimeMenu() {
        const element = this.buttons.dateTime;
        I.click(element);
    },

    selectTimePeriod(period) {
        if (period === '1 Hour') {
            I.click(this.buttons.time_1hour)
        } else if (period === '12 Hours') {
            I.click(this.buttons.time_12hours)
        } else if (period === '24 Hours') {
            I.click(this.buttons.time_24hours)
        }
    },

    async getTimeFrom() {
        return await I.grabValueFrom(this.fields.datetimeFrom);
    },

    async getTimeTo() {
        return await I.grabTextFrom(this.fields.datetimeTo);
    },

    setTimeTo(dateTo) {
        const element = this.fields.datetimeTo;
        I.click(element)
        if (dateTo === 'current time') {
            I.type(getCurrentTime());
        } else {
            I.type(dateTo);
        }
    },

    setTimeFrom(dateFrom) {
        const element = this.fields.datetimeFrom;
        I.click(element)
        if (dateFrom === '1 hour earlier') {
            I.type(getPastPeriod(1));
        } else if (dateFrom === '6 hours earlier') {
            I.type(getPastPeriod(6));
        } else if (dateFrom === '24 hours earlier') {
            I.type(getPastPeriod(24));
        } else {
            I.type(dateFrom);
        }
    },

    assertAccurateTimeFromIsSet(datetimeFrom) {
        let x = document.getElementById(this.fields.datetimeFrom).ATTRIBUTE_NODE(value);
        if (datetimeFrom === '1 hour earlier') {
            I.seeTextEquals(this.getPastPeriod(1), x)
        } else if (datetimeFrom === '12 hours earlier') {
            I.see(this.getPastPeriod(12), this.fields.datetimeFrom)
        } else if (datetimeFrom === '24 hours earlier') {
            I.see(this.getPastPeriod(24), this.fields.datetimeFrom)
        }
    },

    checkAccurateTime() {
        let timeFrom = document.getElementById(this.fields.datetimeFrom).ATTRIBUTE_NODE(value);
        I.seeTextEquals(this.getPastPeriod(1), timeFrom)
    },

    getCurrentTime() {
        let currentTime = moment().utc(true).format().slice(0, -1);
        return currentTime;
    },

    getPastPeriod(time) {
        const now = moment().utc(true);
        const pastPeriod = now.subtract(time, 'h').format(String).slice(0, -1);
        return pastPeriod;
    },

    assertAccurateTimeToIsSet(datetimeTo) {
        const currentTime = moment().utc(true).format().slice(0, -1);
        let x = document.getElementById(this.fields.datetimeTo).ATTRIBUTE_NODE(value);
        if (datetimeTo === 'current time') {
            I.seeTextEquals(currentTime, x);
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
        I.click(element);
        I.wait(2);
    },
    setFileOutcome(outcome) {
        let outcomeType = null;
        const outcomeMenu = this.popup.filterFileOutcomes;
        I.click(outcomeMenu);
        if (outcome === "safe") {
            outcomeType = this.buttons.fileOutcomeFilterSafe;
        } else if (outcome === "allowedByNCFS") {
            outcomeType = this.buttons.fileOutcomeFilterAllowedByNCFS;
        } else if (outcome === "allowedByPolicy") {
            outcomeType = this.buttons.fileOutcomeFilterAllowedByPolicy;
        } else if (outcome === "blockedByPolicy") {
            outcomeType = this.buttons.fileOutcomeFilterBlockedByPolicy;
        } else if (outcome === "blockedByNCFS") {
            outcomeType = this.buttons.fileOutcomeFilterBlockedByNCFS;
        }
        I.click(outcomeType);
    },

    clickFileTypeAdd() {
        const element = this.buttons.fileTypeMenuAdd;
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
            case 'XLS':
                element = this.checkboxes.fileTypeXls;
                break;
            case 'XLSX':
                element = this.checkboxes.fileTypeXlsx;
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
        I.checkOption(element);
    },

    selectCountOfFiles(itemCount) {
        const element = this.options.countOfFiles;
        I.selectOption(element, itemCount);
    },

    addFilterWithValue(filterWithValue) {
        const res = filterWithValue.split("_");
        const filterName = res[0];
        const filterValue = res[1];
        switch (filterName) {
            case 'fileOutcome':
                this.setFileOutcome(filterValue);
                break;
            case 'fileId':
                this.setFileId(filterValue);
                break;
            case 'fileType':
                this.setFileType(filterValue);
                break;
            default:
                throw "there is no such element";
        }
        I.wait(5);
    },

    checkFilters(filteredFile) {
        //todo: rewrite after updating @TEST-179
        const res = filteredFile.split("_");
        if (res.length === 1) {
            //going to text in SelectedFilter_footer
            const filterValue = this.containers.appliedFilters + '> div > div > span';
            I.seeInField(filterValue, filteredFile);
        } else {
            //todo: write for multiple filters
            // for (let value in res) {
            // }
        }
    },

    removeAppliedFilter(filterName) {
        const res = filterName.split("_");
        const filterValue = res[1];

        let listOfFilters = document.querySelectorAll(this.containers.appliedFilterFamily);
        listOfFilters.forEach(e => {
            const filterFooter = e.lastElementChild.children.item(0);
            if (filterFooter.textContent === filterValue) {
                const deleteButton = document.getElementsByClassName(
                    e.firstElementChild
                    .children
                    .item(1)
                    .className
                );
                I.click(`button[class*='` + deleteButton + `']`);
            }
        })
    },
    checkFileValues(filteredFile) {
        const table = document.getElementsByTagName('table')
        for (let row in table.tBodies[0].rows) {
            I.seeInField(row + '> td:nth-child(2)', filteredFile);
        }
    },
    checkFileTypeValues(filteredFile) {
        const table = document.getElementsByTagName('table');
        if (I.see('No Transaction Data Found')) {
            return;
        } else {
            for (let row in table.tBodies[0].rows) {
                I.seeInField(row + '> td:nth-child(3)', filteredFile);
            }
        }
    },
    checkFileRiskValues(filteredFile) {
        const table = document.getElementsByTagName('table');
        if (I.see('No Transaction Data Found')) {
            return;
        } else {
            for (let row in table.tBodies[0].rows) {
                I.seeInField(row + '> td:nth-child(4)', filteredFile);
            }
        }
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

    countFileRecords() {
        const table = document.getElementsByTagName('table')
        return table.tBodies[0].rows.length;
    },

    checkFileDetailViewId(fileId) {
        within(this.modal.modalHeader, () => {
            I.see(fileId);
        })
    }
};
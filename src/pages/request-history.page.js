const MyHelper = require("../utils/helper");
var moment = require('moment');
const {
  I
} = inject();

module.exports = {
    //Locators

  fields: {
    inputFilterFileID: `div[id='inputFilterTransactionID'] > input`,
    customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
    datetimeFrom: 'datetime-local-left',
    //`input[id='datetime-local-left']`,
    datetimeTo: `input[id='datetime-local-right']`,
    from: `div[class='jss3']`,
  },
  options: {
    countOfFiles: ""
  },
  buttons: {
    moreFilters: `button[class*='Filters_moreFilters__']`,
    dateTime: `//button[contains(.,'Date/Time')]`,
    time_1hour: 'button:nth-child(1) > p',
    time_12hours: 'button:nth-child(2) > p',
    time_24hours: 'button:nth-child(3) > p',
    addFilter: `button[class*='Button_button__1V1sR']`,
    deleteAppliedFilter: `button[class^='SelectedFilter_buttonClose__']`,
    fileTypeMenu: "",
    fileOutcomeMenu: "",
    fileOutcomeFilterSafe: "",
    fileOutcomeFilterDangerous: "",
    fileOutcomeFilterBlocked: "",
    fileOutcomeFilterChecked: "",
    fileOutcomeFilterUnclassified: "",
    fileTypeMenuAdd: "",
    fileIdAdd: "",
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
    fileTypeDoc: "",
    fileTypeDot: "",
    fileTypeDocx: "",
    fileTypeDocm: "",
    fileTypeXlsx: "",
    fileTypeXls: "",
    fileTypeXlsm: "",
    fileTypePpt: "",
    fileTypePptx: "",
    fileTypeJpeg: "",
    fileTypePng: "",
    fileTypeGif: "",
    fileTypePdf: "",
  },
  calendar: {
    dateTimePicker: "",
  },
  popup: {
    filterFileId: `div[id='filterMenuPopup'] > ul > li:nth-of-type(2) > button`,
    filterType: `div[id='filterMenuPopup'] > ul > li:nth-of-type(5) > button`,
    filterFileOutcomes: `div[id='filterMenuPopup'] > ul > li:nth-of-type(3) > button`,
    filterMenu: `div[id='filterMenuPopup']`,
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
    if (period == '1 Hour') {
      I.click(this.buttons.time_1hour)
    } else if (period == '12 Hours') {
      I.click(this.buttons.time_12hours)
    } else if (period == '24 Hours') {
      I.click(this.buttons.time_24hours)
    }

  },

  getTimeFrom() {
    const element = this.fields.datetimeFrom;
    I.grabValueFrom(element);

  },

  async getTimeTo() {
    const element = this.fields.datetimeTo;
    let timeTo = await I.grabTextFrom(this.fields.datetimeTo);
    return timeTo;
  },

  setTimeFrom(dateFrom) {
    const element = this.fields.datetimeFrom;
    I.fillField(element, dateFrom);
  },

  setTimeTo(dateTo) {
    const element = this.fields.datetimeTo;
    I.fillField(element, dateTo);
  },

  assertAccurateTimeFromIsSet(datetimeFrom) {
    let x = document.getElementById(this.fields.datetimeFrom).ATTRIBUTE_NODE(value);
    if (datetimeFrom == '1 hour earlier') {
      I.seeTextEquals(this.getPreviousHour(), x)
    } else if (period == '12 hours earlier') {
      I.see(MyHelper.getPrevious12Hour(), this.fields.datetimeFrom)
    } else if (period == '24 hours earlier') {
      I.see(MyHelper.getPrevious24Hour(), this.fields.datetimeFrom)
    }
  },

  checkAccurateTime() {
    let timeFrom = document
    getElementById(this.fields.datetimeFrom).ATTRIBUTE_NODE(value)
    I.seeTextEquals(this.getPreviousHour(), timeFrom)
  },

  getPreviousHour() {
    var now = moment().utc(true);
    var previousHour = now.subtract(1, 'h').format(String).slice(0, -1);
    return previousHour;
  },

  assertAccurateTimeToIsSet(datetimeTo) {
    var currentTime = moment().utc(true).format().slice(0, -1);
    let x = document.getElementById(this.fields.datetimeTo).ATTRIBUTE_NODE(value);
    if (datetimeTo == 'current time') {
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

    setFileOutcome(outcome) {
        let outcomeType = null;
        const outcomeMenu = this.popup.filterFileOutcomes;
        I.click(outcomeMenu);
        if (outcome = "safe") {
            outcomeType = this.buttons.fileOutcomeFilterSafe;
        } else if (outcome = "dangerous") {
            outcomeType = this.buttons.fileOutcomeFilterDangerous;
        } else if (outcome = "blocked") {
            outcomeType = this.buttons.fileOutcomeFilterBlocked;
        } else if (outcome = "checked") {
            outcomeType = this.buttons.fileOutcomeFilterChecked;
        } else if (outcome = "unclassified") {
            outcomeType = this.buttons.fileOutcomeFilterUnclassified;
        }
        I.click(outcomeType);
    },

  clickFileTypeAdd() {
    const element = this.buttons.fileTypeMenuAdd;
    I.click(element);
  },

  setFileId(value) {
    const element = this.fields.inputFilterFileID;
    I.fillField(element, value);
  },

    setFileType(value) {
        const checkboxLabel = value.toUpperCase();
        this.clickFileTypeAdd();
        I.dontSeeCheckboxIsChecked(checkboxLabel);
        I.checkOption(checkboxLabel);
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
    },

    checkFilters(filteredFile) {
        //todo: rewrite after updating @TEST-179
        const res = filteredFile.split("_");
        if (res.length === 1) {
            //going to text in SelectedFilter_footer
            const filterValue = this.containers.appliedFilters + 'div > div > span';
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
                const deleteButton = document.getElementsByClassName
                (
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
    }
};

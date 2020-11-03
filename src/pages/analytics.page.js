const { I } = inject();

module.exports = {

    //Locators   

    inputs: {
        datetimeFrom: 'div[class^=MuiInputBase-inputAdornedEnd]::before > input',
        datetimeTo: 'div[class^=MuiInputBase-inputAdornedEnd]::after > input',
        reportrange: `div[id='reportrange'] > span`,
    },
    sections: {
        dashboard_innerTop: `div[class*='Analytics_innerTop__']`,
        dashboard_lineChart: `div[class*='Analytics_lineChart__']`,
        totalFilesProcessed: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(1)`,
        maxFilesProcessed: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(3)`,
        totalIcapProcessed: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(2)`,
        countTotalProcessed: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(1) > span`,
        countMaxProcessed: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(2) > span`,
        countIcapRequests: `div[class*='Analytics_infoBlocks__'] > div:nth-of-type(3) > span`,

    },
    calendar: {
        datetime_left: `input[id='datetime-local-left']`,
        datetime_right: `input[id='datetime-local-right']`,
        daterangepicker: `div[class*='daterangepicker']`,
        onehour: `div[class*='ranges'] > ul > li:nth-of-type(1)`,
        twelvehours: `div[class*='ranges'] > ul > li:nth-of-type(2)`,
        twenty4hours: `div[class*='ranges'] > ul > li:nth-of-type(3)`,
        customrange: `div[class*='ranges'] > ul > li:nth-of-type(4)`,
        daterangeselected: `span[class*='drp-selected']`,
        cancelBtn: `button[class*='cancelBtn']`,
        applyBtn: `button[class*='applyBtn']`,
        next: `th[class*='next']`,
        prev: `th[class*='prev']`,
    },
    button: {
        datetime: 'button[class*=DateAndTimePickers_intervalButton__]'
    },
    popup: {
        timeIntervalPopup: 'div[class^=Popup_Popup__]'
    },
    legend: {
        safe: `li[class*='legend-item-0']`,
        blocked: `li[class*='legend-item-1']`,
        dangerous: `li[class*='legend-item-2']`,
        unclassified: `li[class*='legend-item-3']`,
        legendList: `//li[contains(@class,'legend-item-')]`,
        pie_safe: `g[class*='recharts-pie'] > g:nth-of-type(1) > g:nth-of-type(1) > path`,
        riskLabels: `g[class*='recharts-pie-labels']`,

    },

//g[contains(@class,'recharts-pie')]/g[1]/g[1]/path

    //Methods

    /*
     * Getters
     * ***************************************************************
     */

    async getTotalFileProcessed() {
        const total = this.sections.countTotalProcessed;
        let totalText = await I.grabTextFrom(total);
        return totalText;
    },

    async getMaxFileProcessed() {
        const total = this.sections.countMaxProcessed;
        let totalText = await I.grabTextFrom(total);
        return totalText;
    },

    async getTotalIcapRequests() {
        const total = this.sections.countIcapRequests;
        let totalText = await I.grabTextFrom(total);
        return totalText;
    },

    /*
     * Risk filtering
     * ***************************************************************
     */
async filterByRisk(risk) {
    let list = await I.grabNumberOfVisibleElements(this.legend.legendList);
    for (let i = 0; i < list; ++i) {
        let item = await I.grabTextFrom(list[i])
        if (item !==risk) {
            I.click(list[i])
        }
    }break;
},

getfilteredRiskPie() {
    const element = locate(this.legend.riskLabels)
                        .withChild('')
     I.seeElement(element)                   

},


    /*
     * Datetime
     * ***************************************************************
     */


    openDatetimeStart() {
        const element = this.buttons.datetime_left;
        I.click(element);
    },

    openDatetimeEnd() {
        const element = this.buttons.datetime_right;
        I.click(element);
    },

    async setDatetimelocalleft(value) {
        const element = await this.getDatetimelocalleftElement();
        await element.type(value);
    },

    async getValueFromDateTimeInput(element) {
        return await I.grabValueFrom(element);
    },

    chooseTimeInterval(timeInterval) {
        const datetimeButton = this.buttons.datetime;
        I.click(datetimeButton);
        I.click(timeInterval.toUpperCase());
    },


    async checkDateTimeFilterValues(dateRange) {
        const array = dateRange.split(" ");
        const dateFrom = array[0];
        const timeFrom = array[1];
        const dateTo = array[3];
        const timeTo = array[4];

        I.seeTextEquals(dateFrom + " " + this.convertTimeFrom24To12(timeFrom), this.inputs.datetimeFrom);
        I.seeTextEquals(dateTo + " " + this.convertTimeFrom24To12(timeTo), this.inputs.datetimeTo);

    },

    convertTimeFrom12To24(time, modifier) {
        let timeArray = time.split(":");
        let hours = timeArray[0];
        let mins = timeArray[1];
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return hours + ":" + mins;
    },

    //23:00 --> 11:00 PM; 11:00 --> 11:00 AM
    convertTimeFrom24To12(time) {
        let timeArray = time.split(":");
        let hours = parseInt(timeArray[0]);
        let mins = timeArray[1];
        let newTime;
        if (hours > 12) {
            newTime = hours % 12 + ":" + mins + " PM";
        } else {
            newTime = hours + ":" + mins + " AM";
        }
        return newTime;
    }
}

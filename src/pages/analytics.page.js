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
        safe: `//span[contains(.,'Safe')]`,
        blocked: `//span[contains(.,'Blocked')]`,
        dangerous: `//span[contains(.,'Dangerous')]`,
        unclassified: `//span[contains(.,'Unclassified')]`,
        checked: `//span[contains(.,'Checked')]`,
        legendList: `//li[contains(@class,'legend-item-')]`,
        rechart_sector: `path.recharts-sector`,
        rechart_line: `path.recharts-curve.recharts-line-curve`,
        riskLabels: `g[class*='recharts-pie-labels']`,
        rechartsTwo: `.recharts-wrapper:nth-child(2) > .recharts-surface`,
        rechartsOne: `.recharts-wrapper:nth-child(1) > .recharts-surface`,
        label_Safe: `path[fill*='#6262B7']`,
        label_Blocked: `path[fill*=' #e1974e']`,
        label_Dangerous: `path[fill*='']`,
        label_Unclassified: `path[fill*='#4C9BCC']`,
        label_Checked: `path[fill*='#7A7A7A']`,
    },

    //class="recharts-layer"

    //Methods

    /*
     * Getters
     * ***************************************************************
     */

    async getTotalFileProcessed() {
        const element = this.sections.countTotalProcessed;
        let count = parseInt(await I.grabTextFrom(element));
        return count;
    },

    async getMaxFileProcessed() {
        const element = this.sections.countMaxProcessed;
        let count = parseInt(await I.grabTextFrom(element));
        return count;
    },

    async getTotalIcapRequests() {
        const element = this.sections.countIcapRequests;
        let count = parseInt(await I.grabTextFrom(element));
        return count;
    },


    /*
     * Risk filtering
     * ***************************************************************
     */
    filterByRisk(chart, fileRisk) {
        let risk = fileRisk.trim();
        let element = this.getChartElement(chart)
        within(element, () => {
            if (risk === 'Safe') {
                I.click(this.legend.safe);
            } else if (risk === 'Blocked') {
                I.click(this.legend.blocked)
            } else if (risk === 'Dangerous') {
                I.click(this.legend.dangerous)
            } else if (risk === 'Unclassified') {
                I.click(this.legend.unclassified)
            } else if (risk === 'Checked') {
                I.click(this.legend.checked)
            } else {
                I.say('Required options not found')
            }
        })
    },

    getChartElement(chart) {
        let element = null;
        if (chart === 'pie'.trim()) {
            element = this.legend.rechartsTwo;
        } else {
            element = this.legend.rechartsOne;
        }
        return element;
    },

    async getRiskSector(risk) {
        let element = this.legend.rechart_sector;
        let sector = null;
        this.filterByRisk(element, risk);
        within(element, () => {
            try {
               sector = this.legend.label_ + risk
            } catch (e) {
                I.say('errors, sector element not found')
                console.warn(e);
            }
        })
        return sector;
    },

    async getRiskMetricsCount(risk) {
        let count = 0;
        let element = this.legend.rechart_sector;
        this.filterByRisk(element, risk);
        within(element, async () => {
            try {
            count = await I.grabValueFrom(this.legend.label_+ risk)
            } catch (e) {
                I.say('errors, unable to retrieve value')
                console.warn(e);
            }})
        return count;
    },

    async getCountOfSectors(chart) {
        let countsectors = null;
        if (chart === 'pie'.trim()) {
            countsectors = await I.grabNumberOfVisibleElements(this.legend.rechart_sector);
        } else {
            countsectors = await I.grabNumberOfVisibleElements(this.legend.rechart_line);
        }
        return countsectors;
    },

    async assertFilteredRisk(chart, riskLabel) {
        let element = this.getChartElement(chart);
        let label = riskLabel.trim();
        try {
            within(element, async () => {
                let countsectors = null;
                if (chart === 'pie'.trim()) {
                    countsectors = await I.grabNumberOfVisibleElements(this.legend.rechart_sector);
                } else {
                    countsectors = await I.grabNumberOfVisibleElements(this.legend.rechart_line);
                }
                I.assertEqual(countsectors, 1, "The number of filtered risks displayed (" + countsectors + ") is NOT as expected")
                if (riskLabel === 'Safe') {
                    I.seeElement(this.legend.label_Safe)
                } else if (label === 'Blocked') {
                    I.seeElement(this.legend.label_Blocked)
                } else if (label === 'Dangerous') {
                    I.seeElement(this.legend.label_Dangerous)
                } else if (label === 'Unclassified') {
                    I.seeElement(this.legend.label_Unclassified)
                } else if (label === 'Checked') {
                    I.seeElement(this.legend.label_Checked)
                } else {
                    I.say('Required options not found')
                }
            })
        } catch (e) {
            I.say('errors')
            console.warn(e);
        }
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

const {I} = inject();

module.exports = {

//Locators   

    sections: {
        dashboard_innerTop: `div[class*='Dashboard_innerTop__dMQgj']`,
        Dashboard_lineChart: `div[class*='Dashboard_lineChart__Tw9kQ'] > div > canvas`,
        totalfilesprocessed: `div[class*='Dashboard_innerTop__dMQgj']`,
        },
    calendar: {
        datetime_left: `input[id='datetime-local-left']`,
        datetime_right: `input[id='datetime-local-right']`,
    },

//Methods

    /*
     * Getters
     * ***************************************************************
     */

    async getTotalFileNumber() {
        const total = this.sections.totalfilesprocessed;
        let totalText = await I.grabTextFrom(total);
        return totalText;
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
}


}
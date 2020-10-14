const {
    I
} = inject();

module.exports = {

        //Locators   


sections: {
    filedropModal: `div[class*='StyledDropzone_border__92UuO']`,
},
buttons:{
    fileSelectButton: `button[class*='Button_button__1V1sR']`,

},


//Methods

/*
 * FileDrop
 * ***************************************************************
 */

clickSelectFile() {
    const element =  this.buttons.fileSelectButton;
    I.click();
}


}
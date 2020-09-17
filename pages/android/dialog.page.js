class Dialog{
    //Accessibility ID
    get appBtn() {return $("~App")}
    // Using Xpath
    get addBtnXpath() {return $('//android.widget.TextView[@content-desc="App"]')}
    // Using resource-id
    get userNameField() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')}
    // Using index
    get repeadAlarmMonday() {return $('//android.widget.CheckedTextView[@index="0"]')} 
    // Get all the checkboxes
    get repeatAlarmCheckBoxes() {return $$('//android.widget.CheckedTextView')}
  // ****Alert Dialog box different elements ****
  
  //**1- Accessibility ID  */ 
   get alertDialog() {return $("~Alert Dialogs")}
    // get listDialogBtn() {return $("~List dialog") }
    //**2- Using Xpath */
    get textEntryDialogBox() {return $('//android.widget.Button[@content-desc="Text Entry dialog"]') }
    //**3- Using @resource-id  */
    get nameTxtBox() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]') }
    get passTxtBox() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]') }
    //**4- By Text */
    get okBtn() {return $('//android.widget.Button[@text="OK"]') }
    get cancelBtn() {return $('//android.widget.Button[@text="Cancel"]') }
    get okAndCancelBtns() {return $$('//android.widget.Button') }
    // get headerTitle() {return $$("/android.widget.TextView") }
    // get headerTitle() {return $('//android.widget.TextView')}

    //** For Repeat Alarm */
    get repeatAlarmDialog() {return $('//*[@text="Repeat alarm"]')}
}
module.exports= new Dialog();
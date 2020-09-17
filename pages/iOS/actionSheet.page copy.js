class ActionSheet {
  
  //get actionSheetBtn() {return $('//XCUIElementTypeStaticText[@name="Action Sheets"]')}
  get actionSheetBtn() {return $('~Action Sheets')}
  
  get okayCancelBtn() {return $('//XCUIElementTypeStaticText[@value="Okay / Cancel"]')}
  get okButton() {return $('//XCUIElementTypeButton[@name="OK"]')}
//   get otherBtn() {return $('//XCUIElementTypeStaticText[@name="Other"]')}
  get otherBtn() {return $('//*[@name="Other"]')}
  get safeOptBtn() {return $('//XCUIElementTypeButton[@name="Destructive Choice"]')}


}
module.exports = new ActionSheet();
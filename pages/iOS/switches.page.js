class Switches {
  
    //** For toolbar element */
    get toolBarMainBtn() {return $('~Toolbars')}
    //get actionSheetBtn() {return $('//XCUIElementTypeStaticText[@name="Action Sheets"]')}
    
    get switchesMainBtn() {return $('~Switches')}

    
   // get switchBtns() {return $$('//*[@type="XCUIElementTypeSwitch"]')}
    get switchBtns() {return $$('//XCUIElementTypeSwitch')}
  
   //** First Switch */
   //XCUIElementTypeApplication[@name=\"UICatalog\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeSwitch
   //XCUIElementTypeApplication[@name=\"UICatalog\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeSwitch
  }
  module.exports = new Switches();
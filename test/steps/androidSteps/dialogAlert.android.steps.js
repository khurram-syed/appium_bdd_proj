const { Given, When, Then } = require('cucumber')
const dialog = require('../../../pages/android/dialog.page')
const tabs = require('../../../pages/android/tabs.page')
const expect = require('chai').expect;

Given('user navigates to the Android app', function() {
    console.log("Navigating to the Android App..!");
   // basePage.waitToLoad(2)
    driver.pause(2000)
  })
  
  When(/^user clicks on the android app \"(.*)\" button$/, (btnName) => {
    console.log(`Clicking on the ${btnName} button..!`);
    if(btnName=="App"){
        dialog.appBtn.click();
     }else if(btnName=="alertDialog"){
        dialog.alertDialog.click();
     }else if(btnName=="textEntryDialogBox"){
        dialog.textEntryDialogBox.click();
     }else if(btnName=="Views"){
        tabs.viewsBtn.click();
     }else if(btnName=="Tabs"){
       scrollDown(3,tabs.tabsBtn)
        tabs.tabsBtn.click();
    }else if(btnName=="commentID"){
        tabs.commentIdBtn.click();
    }else{
         throw Error(`No Button ${txtBoxName} found...!!`)
     }
    driver.pause(1000);
  });
  
  When(/^user writes \"(.*)\" in the text box \"(.*)\"$/, (txtValue, txtBoxName) => {
    console.log(`user writes ${txtValue} in the text box ${txtBoxName}`);
   
    if(txtBoxName=="name"){
        dialog.nameTxtBox.clearValue();
        dialog.nameTxtBox.addValue("Test User")
     }else{
         throw Error(`No Text Box ${txtBoxName} found...!!`)
     }
    driver.pause(1000);
  });
  
  Then(/^user should be seeing the same name \"(.*)\"$/, (txtValue) => {
    console.log(`user should be seeing the same name ${txtValue} page`);
    if(txtValue=="Test User"){
        let nameText = dialog.nameTxtBox.getText()
        console.log("*** Name Text :",nameText)
        expect(txtValue).equal(nameText)
     }else{
         throw Error(`No Text Value ${txtValue} found...!!`)
     }
    driver.pause(1000);
 });

  Then(/^user should do some extra seteps for \"(.*)\"$/, (viewName) => {
    console.log(`user should be seeing the same name ${viewName} page`);
    if(viewName=="Text Entry Dialog"){
        dialog.nameTxtBox.clearValue();
        dialog.passTxtBox.addValue("Password123")
        dialog.okAndCancelBtns[0].click()
        dialog.textEntryDialogBox.click();
        dialog.cancelBtn.click();
     }else if(viewName=="Orientation and Screenshot"){
        driver.pause(2000)
        driver.setOrientation('LANDSCAPE') // PORTRAIT
        dialog.appBtn.click()
        driver.pause(1000)
        driver.saveScreenshot('./screenshots/landscape.png')
        driver.back()
        driver.setOrientation('PORTRAIT')
       // expect(false).to.be.true
     }else if(viewName=="Tabs Views"){
         checkAllTabs()
   }
     else{
         throw Error(`No View Name ${viewName} found...!!`)
     }
    driver.pause(2000);
 });

 var checkAllTabs = ()=>{
  for(let i=0 ; i<3 ; i++){
    let isSelected = tabs.tabNames[i].isSelected();
    let isDisplayed = tabs.tabNames[i].isDisplayed() 
   console.log(`TAB${i} is selected ===>>`,isSelected)
   console.log(`TAB${i} is enabled ===>>`,tabs.tabNames[i].isEnabled())
   console.log(`TAB${i} is displayed ===>>`,isDisplayed)
   if(isSelected && isDisplayed){
       console.log(`Tab Details 1 :`,tabs._tabsAreasText("tab1").isDisplayed())
       console.log(`Tab Details 2 :`,tabs._tabsAreasText("tab2").isDisplayed())
       console.log(`Tab Details 3 :`,tabs._tabsAreasText("tab3").isDisplayed())
   }
   tabs.tabNames[i+1].click()
   driver.pause(1000)
}  
 }

 var scrollDown = (noOfTimes,element)=>{
  let count=0;
  while(count<noOfTimes && !element.isDisplayed()){
      driver.touchAction([
         {action : 'press', x:500, y:1400},
         {action: 'moveTo', x:500, y:300},
         'release' 
      ])
   count++;
   }
 } 
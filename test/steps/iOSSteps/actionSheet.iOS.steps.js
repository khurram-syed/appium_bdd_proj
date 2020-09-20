const { Given, When, Then } = require('cucumber')
const actionSheet = require('../../../pages/iOS/actionSheet.page')
const switches = require('../../../pages/iOS/switches.page')
const expect = require('chai').expect;

Given('iOS user navigates to the app', function() {
    console.log("iOS user navigates to the app!");
   // basePage.waitToLoad(2)
    driver.pause(2000)
  })
  
  When(/^iOS user clicks on the \"(.*)\" button$/, (btnName) => {
    console.log(`Clicking on the ${btnName} button..!`);
    if(btnName=="actionSheet"){
        actionSheet.actionSheetBtn.click();
    }else if(btnName=="okayCancel"){
        actionSheet.okayCancelBtn.click();
    }else if(btnName=="OK"){
        actionSheet.okButton.click();
    }else if(btnName=="switchesMain"){
        switches.switchesMainBtn.click();
    }else if(btnName=="switches1st"){
        switches.switchBtns[0].click();
    }else if(btnName=="switches2nd"){
        switches.switchBtns[1].click();
    }else{
         throw Error(`No Button ${txtBoxName} found...!!`)
     }
    driver.pause(1000);
  });
  
  Then(/^iOS user should do some extra seteps for \"(.*)\"$/, (viewName) => {
    console.log(`user should be seeing the same name ${viewName} page`);
    if(viewName=="otherButtons"){
        console.log("*** Other Text :",actionSheet.otherBtn.getText())
        actionSheet.otherBtn.click();
        actionSheet.safeOptBtn.click();
     }else if(viewName=="check switch Btns"){
        console.log("*** Switch Button 1 Value :",switches.switchBtns[0].getAttribute('value'));
        console.log("*** Switch Button 2 Value :",switches.switchBtns[1].getAttribute('value'));
     }else if(viewName=="Failing the Step"){
        expect(true).to.be.true
     }else if(viewName=="Failing Sheet"){
        expect(true).to.be.true
     }
     else{
         throw Error(`No View Name ${viewName} found...!!`)
     }
    driver.pause(2000);
 });

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
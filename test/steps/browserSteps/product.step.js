const {Given, When, Then} = require('cucumber')
var productPage = require('../../../pages/webBrowser/product.page.js');
var basePage = require('../../../pages/webBrowser/base.page')


When(/^user sets the "(.*)" value "(.*)"$/,(inputName,value)=>{
   if(inputName==="email"){
      console.log("Email Value :"+value);
      basePage.webSetValue(productPage.reviewEmailTxtBox,value);
   }else if (inputName==="quantity"){
      console.log("Quantity Value :"+value);
      basePage.webSetValue(productPage.qtyTxtBox,parseInt(value));
   }   
});


Then(/^user should see "Thank you" message displayed underneath$/,()=>{
   console.log('user should see "Thank you" message displayed underneath');
   const isTextDisplayed=basePage.webWaitForDisplayed(productPage.thankYouMsg);
   console.log('***isTextDisplayed : ',isTextDisplayed)
 
   expect(isTextDisplayed).to.be.true;
})

Then(/^user should see the "(.*)" button enabled$/,(btnName)=>{
   console.log(`user should see the ${btnName} button enabled`);
   let isEnabled = basePage.webWaitForEnabled(productPage.buyNowBtn);
   console.log("***Button is enabled..!!! : "+isEnabled);
   
   expect(isEnabled).to.be.true
   basePage.waitToLoad()
});
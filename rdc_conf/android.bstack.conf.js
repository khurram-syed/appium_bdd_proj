const {config} = require('../wdio.conf')
const {join}  = require('path')
//**  FOR BROWSER STACK - ANROID CONFIG ****/

config.specs = ['./features/androidApp/**/*.feature']
config.capabilities=[
        {
        maxInstances: 1,    
        platformName: 'Android',
        deviceName: 'Google Pixel 3',
        automationName: 'UiAutomator2',
        'project': 'Appium BDD Project',
        'build' : 'appium_bdd_proj_1', 
        'name' : 'Browser Stack Android Test',
        // 'appium:app': join(process.cwd(),'./app/ApiDemos-debug.apk')
        app : 'bs://5599cd9526864c3343d4e376edd8ab5107934369' 
      //  'appium:app': 'bs://5599cd9526864c3343d4e376edd8ab5107934369' // Given by BStack
    }
]
config.browserstackLocal = true;
config.cucumberOpts.tagExpression='@androidTabs'//'@androidDialog'
config.cucumberOpts.require= require('glob').sync('./test/steps/androidSteps/**/*.js')
config.afterStep= function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {

    if (!passed) {
     try{  
       console.log("----->**** Taking Screenshot in ANDROID *****<-------- :")
    //    let filePath = join(process.cwd(),'./screenshots/Error_'+reportSufix+'.png')
        // driver.saveScreenshot(filePath);
         driver.takeScreenshot();
     }catch(e){
         console.log("Error ===> :",e)
     }
    }
}
// =========================
// Sauce RDC specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services =  [['browserstack', 
                     { browserstackLocal: true }
                   ]];
// If you need to connect to the US RDC cloud comment the below line of code
//config.region = 'us';
//config.port= 4723;
//delete config.port;

config.afterScenario= function (uri, feature, scenario, result, sourceLocation, context) {
      console.log("----->****----------RESETTING APP-----------*****<-------- :")
      driver.reset()
}
config.after = function(exitCode, config, capabilities, results) {
    console.log("----->****======== ON COMPLETE==============*****<-------- :")
},

exports.config =config
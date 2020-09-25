const {config} = require('../wdio.conf')
const {join}  = require('path')

config.specs = ['./features/androidApp/**/*.feature']
var reportSufix = process.env.BUILD_NUMBER || util.getFormattedDate();

config.capabilities=[
        {
        maxInstances: 1,    
        deviceName: 'Samsung Galaxy S[8912].*',
        automationName: 'UiAutomator2',
        // The reference to the app
        testobject_app_id: '4',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID_WDIO,
        // The name of the test for in the cloud
        testobject_test_name: 'wdio-demo-app-test',
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        platformName: 'Android',
        'appium:deviceName': 'Pixel 3',
        'appium:app': join(process.cwd(),'./app/ApiDemos-debug.apk')
       // , 'appium:noReset': false
        //,'appium:dontStopAppOnReset': true,
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // With these settings the application will not be closed between tests
        //, 'appium:noReset': true,
        // 'appium:fullReset': false,
        // 'appium:dontStopAppOnReset': true,
        // 'appium:newCommandTimeout': 60,
    }
]
config.cucumberOpts.tagExpression=''//'@androidDialog'
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
config.services = ['sauce'];
// If you need to connect to the US RDC cloud comment the below line of code
config.region = 'us';
//config.port= 4723;
delete config.port;

config.afterScenario= function (uri, feature, scenario, result, sourceLocation, context) {
      console.log("----->****----------RESETTING APP-----------*****<-------- :")
      driver.reset()
}
config.after = function(exitCode, config, capabilities, results) {
    console.log("----->****======== ON COMPLETE==============*****<-------- :")
},

exports.config =config
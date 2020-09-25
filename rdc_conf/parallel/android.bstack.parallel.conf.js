const {config} = require('../../wdio.conf')
const devices = require('./devices.data')
const {join}  = require('path')
//**  FOR BROWSER STACK - ANROID PARALLEL CONFIG ****/
const BUILDNAME = 'appium_bdd_proj_Android_parallel_5'
config.specs = ['./features/androidApp/**/*.feature']
config.commonCapabilities = { 'project': 'Appium BDD Project',
                             'build' : BUILDNAME, 
                             'name' : 'BStack Parallel Pixel3 Android Test',
                             platformName: 'Android',
                             automationName: 'UiAutomator2',
                             app : 'bs://30bbd78d5db94256d1b70b3b9e434eddac391b96',
                            }
config.capabilities=devices.android_devices
config.cucumberOpts.tagExpression='@androidDialog',//'@androidTabs'//'@androidDialog'
config.cucumberOpts.require= require('glob').sync('./test/steps/androidSteps/**/*.js')
config.afterStep= function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
    if (!passed) {
     try{  
       console.log("----->**** Taking Screenshot in ANDROID *****<-------- :")
         driver.takeScreenshot();
     }catch(e){
         console.log("Error ===> :",e)
     }
    }
}
// =========================
// Sauce RDC[Remote Desktop Cloud] specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services =  [['browserstack', 
                     { browserstackLocal: true }
                   ]];
//config.port= 4723;
//delete config.port;

config.afterScenario= function (uri, feature, scenario, result, sourceLocation, context) {
      console.log("----->****----------RESETTING APP-----------*****<-------- :")
      driver.reset()
}
config.after = function(exitCode, config, capabilities, results) {
    console.log("----->****======== ON COMPLETE==============*****<-------- :")
},
config.capabilities.forEach((caps)=>{
    for(var i in config.commonCapabilities){
        caps[i]=caps[i] || config.commonCapabilities[i]
    }
})
exports.config =config
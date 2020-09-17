const {config} = require('./wdio.conf')
const {join}  = require('path')
const util = require('./utils/util.functions')


config.specs = ['./features/androidApp/**/*.feature']
var reportSufix = process.env.BUILD_NUMBER || util.getFormattedDate();

config.capabilities=[
        {
        maxInstances: 1,    
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
//    console.log("Error ****===========-------> :",error)
//    console.log("result ****===========-------> :",result)
//    console.log("passed ****===========-------> :",passed)
//    console.log("step ****===========-------> :",step)
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
config.services= [
    ['appium',{ command:'appium'}]
];
config.port= 4723;

config.afterScenario= function (uri, feature, scenario, result, sourceLocation, context) {
      console.log("----->****----------RESETTING APP-----------*****<-------- :")
      driver.reset()
}
config.after = function(exitCode, config, capabilities, results) {
    console.log("----->****======== ON COMPLETE==============*****<-------- :")
},

exports.config =config
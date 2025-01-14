const {config} = require('../wdio.conf')
const {join}  = require('path')
var glop = require('glob')

config.specs = ['./features/iOSApp/**/*.feature']

config.capabilities=[
    {   maxInstances: 1,
        platformName: 'iOS',
        //'appium:deviceName': 'iPhone 11 Pro',
        device: 'iPhone 11 Pro',
        'appium:automationName': "XCUITest",
        app : 'bs://035b5aaaf499f18cdc59f70f17e60a3f5420bd6c' 
        //'appium:app': join(process.cwd(),'./app/UICatalog.app'),
        ///Users/ksyed/Desktop/Work/Learning/JavaScript/AppiumProj/app/UICatalog.app
    }  
]
config.cucumberOpts.tagExpression='@iOS'
config.cucumberOpts.require= require('glob').sync('./test/steps/iOSSteps/**/*.js')
config.services =  [['browserstack', 
                     { browserstackLocal: true }
                   ]];
// config.services= [
//                         ['appium',{ command:'appium'}]
//                   ];
//config.port= 4723;

config.afterStep= function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
    if (!passed) {
        console.log("----->**** Taking Screenshot in IOS *****<-------- :",step)
        driver.takeScreenshot();
    }
}
config.afterScenario= function (uri, feature, scenario, result, sourceLocation, context) {
    console.log("----->****----------RESETTING APP-----------*****<-------- :")
    driver.reset()
}

exports.config =config
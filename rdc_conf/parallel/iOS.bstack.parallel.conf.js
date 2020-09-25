const {config} = require('../../wdio.conf')
const devices = require('./devices.data')
var glop = require('glob')

config.specs = ['./features/iOSApp/**/*.feature']

const BUILDNAME = 'appium_bdd_build_iOS_parallel_4'
config.commonCapabilities = { 'project': 'Appium BDD Project',
                              'build' : BUILDNAME, 
                              'name' : 'BStack Parallel iPhone11 iOS Test',
                              platformName: 'iOS',
                              automationName: 'XCUITest',
                              app : 'bs://035b5aaaf499f18cdc59f70f17e60a3f5420bd6c',
                            }
config.capabilities= devices.iOS_devices
config.cucumberOpts.tagExpression='@iOSActionSheet'
config.cucumberOpts.require= require('glob').sync('./test/steps/iOSSteps/**/*.js')
config.services =  [['browserstack', 
                     { browserstackLocal: true }
                   ]];

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
config.capabilities.forEach((caps)=>{
    for(var i in config.commonCapabilities){
        caps[i]=caps[i] || config.commonCapabilities[i]
    }
})
exports.config =config
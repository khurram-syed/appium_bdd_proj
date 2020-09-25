const {config} = require('../wdio.conf')
const {join}  = require('path')

//**  FOR BROWSER STACK - BROWSER CONFIG ****/

var baseURL='http://www.kevinlamping.com/webdriverio-course-content/';
config.specs = ['./features/androidApp/**/*.feature']
config.capabilities=[
        {    maxInstances: 2,
            'project': 'Appium BDD Project',
            'build' : 'appium_bdd_proj_2',
            'os' : 'Windows',//'OS X',
            'os_version' : '10',
            'browserName' : 'Chrome',
            'browser_version' : '81',
            'name' : "Browser Stack Web Test",
            acceptInsecureCerts: true
    }
]
config.services =  [['browserstack', 
                     { browserstackLocal: true }
                   ]];

config.specs = ['./features/webBrowser/**/*.feature']


config.cucumberOpts.tagExpression='@home'
config.baseUrl=baseURL
config.cucumberOpts.tagExpression=''
config.cucumberOpts.require= require('glob').sync('./test/steps/browserSteps/**/*.js')
config.afterStep= function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
    if (error) {
        console.log("----->**** Taking Screenshot in *****<-------- :",step)
        browser.takeScreenshot();
    }
},

exports.config = config

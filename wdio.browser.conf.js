var glop = require('glob')
const {config} = require('./wdio.conf')
var baseURL='http://www.kevinlamping.com/webdriverio-course-content/';

config.specs = ['./features/webBrowser/**/*.feature']

config.capabilities = [{
    maxInstances: 2,
    browserName: 'chrome',
    acceptInsecureCerts: true
}]
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

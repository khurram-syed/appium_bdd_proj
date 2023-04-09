## Installation

You must have 12.18.0 [Node.js](https://www.nodejs.org/) installed. 

```sh
npm install
```

## Usage

Install the Dependencies:

```sh
npm install
```

Run the tests :

```sh
npm test
```

For Specific Tag : 
```sh
npm test -- --cucumberOpts.tagExpression="@login"
```
Note : Tests can be run either in Browser (using "npm test") OR in Android (using "npm run android.app") OR in iOS (using "npm run iOS.app") OR run on both iOS and Android (using "npm run app.all")

## Appium Guide
**Note:** Sample testing apps are provided in app folder.  Features are written for each platform (WEB, iOS & Android). Also parallel run options are provided (please check package.json file for further options)

**To Run Test Locally :** 
  - For Android : You need to configure simulators locally(with same name as given in android.conf.js file) by installing Android Device Manager (Or Android SDK)
  - For iOS : You need to configure Simulator using iOS Simulator (with same name as given in android.conf.js file) in XCode : (For further info : https://www.youtube.com/watch?v=wNINabDpsvQ)


**To Run Test in Remote Cloud:**
 - To run your test in Cloud (like Browserstack etc.) you need to configure device in the clound(with same name as given in "android.bstack.conf.js" or "iOS.bstack.conf.js" files OR change devices names in files according to Cloud devices) with apikey that needs giving in "app" section in corresponding conf.js files.

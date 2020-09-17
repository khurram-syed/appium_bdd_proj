@androidTabs
Feature: 1002- Tab Tests
    As a site user, I want to use the tabs feature so that
    I can use it confidently

  Background: Opening the app
     Given user navigates to the Android app
  
  @androidTabs21
  Scenario: 1002_1- Check the Tabs - isSelected - isEnabled - isDisplayed
     When user clicks on the android app "Views" button
     And user clicks on the android app "Tabs" button
     And user clicks on the android app "commentID" button
     Then user should do some extra seteps for "Tabs Views"
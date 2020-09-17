@iOSActionSheet @iOS
Feature: 5001- Action Sheet OK - Cancel
    As a site user, I want to use the action sheet feature so that
    I can use it confidently

  Background: Opening the app
     Given iOS user navigates to the app
  
  @iOS5001_1
  Scenario: 5001_1- Check the Tabs - isSelected - isEnabled - isDisplayed
     When iOS user clicks on the "actionSheet" button
     And iOS user clicks on the "okayCancel" button
     And iOS user clicks on the "OK" button
     Then iOS user should do some extra seteps for "otherButtons"

 @iOS5001_2
  Scenario: 5001_2- Check the Tabs - isSelected - isEnabled - isDisplayed
     When iOS user clicks on the "actionSheet" button
     And iOS user clicks on the "okayCancel" button
     Then iOS user should do some extra seteps for "Failing Sheet"  
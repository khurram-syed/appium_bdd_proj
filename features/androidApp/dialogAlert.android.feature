@androidDialog
Feature: 1001- Entry Dialog and Orientation
    As a site user, I want to use the dialog and Orientation feature so that
    I can use it confidently

  Background: Opening the app
     Given user navigates to the Android app
  
  @android1
  Scenario: 1001_1- Check the Entry Dialog Text
     When user clicks on the android app "App" button
     And user clicks on the android app "alertDialog" button
     And user clicks on the android app "textEntryDialogBox" button
     And user writes "Test User" in the text box "name"
     Then user should be seeing the same name "Test User"
     And user should do some extra seteps for "Text Entry Dialog"
  
  @android2
   Scenario: 1001_2- Test Orientation With Pause and get the Screenshot
      Then user should do some extra seteps for "Orientation and Screenshot"
       

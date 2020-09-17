@iOSSwitches @iOS
Feature: 5002- Switches - Yes - No
    As a site user, I want to use the switches sheet feature so that
    I can use it confidently

  Background: Opening the app
     Given iOS user navigates to the app
  
  @iOS5002_1
  Scenario: 5002_1- Check the Switches
     When iOS user clicks on the "switchesMain" button
     And iOS user clicks on the "switches1st" button
     And iOS user clicks on the "switches2nd" button
     Then iOS user should do some extra seteps for "Failing the Step"
 
   @iOS5002_2
  Scenario: 5002_2- Check the Switches
     When iOS user clicks on the "switchesMain" button
     And iOS user clicks on the "switches1st" button
     And iOS user clicks on the "switches2nd" button
     Then iOS user should do some extra seteps for "check switch Btns"

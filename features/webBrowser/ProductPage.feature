@product @web
Feature: 2-Product Page Checks
    As a site user, I want to use the product page features so that
    I can use it confidently

  Background: Opening the site
     Given user navigates to the site
 
  @product21
  Scenario: 21-Check the product button "Buy Now" enabling
     When user clicks on the "product" button
     And user sets the "quantity" value "10"
     Then user should see the "Buy Now" button enabled
  @wip @product22
    Scenario: 22-Check the product button Thank you message after buying
       When user clicks on the "product" button
       And user sets the "quantity" value "10"
       When user clicks on the "Buy Now" button
       Then user should see "Thank you" message displayed underneath
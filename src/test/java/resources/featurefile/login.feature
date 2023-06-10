@smoke
Feature: Login Test
  As user I want to login into nop commerce website

  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click to login link
    Then I should navigate to login page successfully

  Scenario: User should login with valid credentials
    Given I am on homepage
    When I click to login link
    And I enter email "primetesting123@gmail.com"
    And I enter password "Prime@123"
    And I click on Login Button
    Then I should login successfully
#
#  Scenario Outline: Verify the error message with invalid credentials
#    Given I am on homepage
#    When I click to login link
#    And I enter email "<email>"
#    And I enter password "<password>"
#    And I click on Login Button
#    Then I should see the error message "<errorMessage>"
#    Examples:
#      | email              | password | errorMessage                                                                                |
#      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
#      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
#      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
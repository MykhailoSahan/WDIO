Feature: Sign Up/In Page

  @signup
  Scenario: Navigate to the sign up page and fill in the form
    Given I open the main page
    When I click the sign in button
    And I sign up as a new user
    Then I should see the sign in page

  @signin
  Scenario: Sign in with the registered account
    Given I am on the sign in page
    When I sign in with registered credentials
    Then I should see the user account info

  @profile
  Scenario: Update user profile information
    Given I am on user account info page
    When I update my profile first name and last name
    Then My profile first name and last name should be updated
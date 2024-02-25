# Donor Tracking System

This project is a  Donor Tracking System application built with React.

## Testing Framework

Our team has agreed to use Jest Testing Framework for testing react application.

## Requirement

The testing requirement for this project is outlined in [GitHub Issue #43](https://github.com/slu-csci-5030/material-donor-mutual-assist/issues/43), which specifies:

## Unit Test Cases for LoginPage Component

The unit test cases for the LoginPage component can be broken down as follows:

### Test 1: Rendering Test
- **Description:** This test ensures that the component renders without throwing any errors.
- **Steps:**
  1. Render the LoginPage component.
  2. Assert that at least one element with the login label is rendered.
- **Assertion:**
  - Expect that an element containing the text 'Login' is present in the rendered component.

### Test 2: Form Submission Test with Valid Credentials
- **Description:** This test checks whether the form submission works correctly when valid credentials are provided.
- **Steps:**
  1. Mock the local storage to simulate a stored user with valid credentials.
  2. Render the LoginPage component.
  3. Fill out the form with valid username and password.
  4. Submit the form.
- **Assertion:**
  - Expect that the window.alert function is called with the message 'Login successful'.

These test cases ensure that the LoginPage component behaves as expected, both in terms of rendering and form submission with valid credentials.


## Running the Application

Follow these steps to run the application:

Make Sure you are in the client-app directory

1. **Install Dependencies**: Run `npm install` to install all necessary dependencies.

2. **Start the Development Server**: Run `npm start` to start the development server. This will launch the application in your default web browser.


## Testing the Application

To test the application, follow these steps:


1. **Run Tests**: Run `npm test` to execute the test suite. This will run all test cases and provide feedback on their success or failure.

2. **View Test Results**: After running the tests, the test runner will display the results in your terminal. Failed tests will provide information about what went wrong.




# Material Donor Mutual Assist

Material Donor Mutual Assist is a project aimed at facilitating mutual assistance between material donors and those in need.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
- [Unit Tests](#unit-tests)
- [How to Run Tests](#how-to-run-tests)

## Overview

Material Donor Mutual Assist is a web application built with React.js that allows material donors to register and provide assistance, while those in need can also register to receive assistance. It includes features such as user authentication, registration forms, and a dashboard for managing assistance requests and donations.

## Components

### LoginPage Component

The `LoginPage` component allows users to log in to the application using their username and password. It includes a form with input fields for username and password, along with login button.

Location: `client-app/src/components/LoginPage.js`

### RegisterPage Component

The `RegisterPage` component provides a registration form for new users to sign up for the application. It includes input fields for first name, last name, username, password, date of birth, email, contact number, and address.

Location: `client-app/src/components/RegisterPage.js`

## Unit Tests

### LoginPage Component

- **Test 1: Renders the login form with username and password fields**
  - Test File: `client-app/src/components/LoginPage.test.js`
  - Description: This test ensures that the login form renders correctly with fields for username and password.

- **Test 2: Allows user to input username and password**
  - Test File: `client-app/src/components/LoginPage.test.js`
  - Description: This test verifies that users can input their username and password into the login form.

### RegisterPage Component

- **Test 1: Renders the registration form with required fields**
  - Test File: `client-app/src/components/RegistrationPage.test.js`
  - Description: This test ensures that the registration form renders correctly with required fields such as first name, last name, etc.

- **Test 2: Allows user to input registration details**
  - Test File: `client-app/src/components/RegistrationPage.test.js`
  - Description: This test verifies that users can input their registration details into the form.

## How to Run Tests

To run the unit tests for this project, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.

2. Install dependencies:
   ```bash
   npm install
3. Run all tests:
   npm test
4. Run specific tests
   npm test path/to/test/file.test.js

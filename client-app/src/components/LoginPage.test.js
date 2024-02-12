// src/components/LoginPage.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

test('renders login form', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  // Assert that the login form elements are present
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});

test('handles login button click', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  // Mocking the console.log function
  const mockLogin = jest.fn();
  jest.spyOn(console, 'log').mockImplementation(mockLogin);

  // Simulate user input and button click
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText(/sign in/i));

  // Assert that the mock login function was called with the expected arguments
  expect(mockLogin).toHaveBeenCalledWith('Logging in with:', 'test@example.com', 'password123');
});

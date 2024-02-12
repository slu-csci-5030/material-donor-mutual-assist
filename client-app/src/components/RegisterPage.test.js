import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegisterPage from './RegisterPage';

test('renders the registration form with required fields', () => {
  render(<RegisterPage />);
  const firstNameInput = screen.getByPlaceholderText('First Name');
  const lastNameInput = screen.getByPlaceholderText('Last Name');
  // Add more assertions for other required fields
  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  // Assert other required fields are present
});

test('allows user to input registration details', () => {
  render(<RegisterPage />);
  const firstNameInput = screen.getByPlaceholderText('First Name');
  const lastNameInput = screen.getByPlaceholderText('Last Name');
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
  // Add more interactions and assertions as needed
});

test('displays error message if required fields are not filled', () => {
  render(<RegisterPage />);
  const submitButton = screen.getByText('Register');
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText('Please fill out all required fields.');
  expect(errorMessage).toBeInTheDocument();
});
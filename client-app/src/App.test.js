import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders LoginPage component for the root route', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Ensure LoginPage component is rendered for the root route
  const loginPageElement = screen.getByText(/Login/i);
  expect(loginPageElement).toBeInTheDocument();
});

test('renders RegisterPage component for the /register route', () => {
  render(
    <Router initialEntries={['/register']}>
      <App />
    </Router>
  );

  // Ensure RegisterPage component is rendered for the /register route
  const registerPageElement = screen.getByText(/Register/i);
  expect(registerPageElement).toBeInTheDocument();
});

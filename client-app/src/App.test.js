import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Import the App component

test('renders login page when application starts', () => {
  const { getByRole } = render(<App />);
  const loginButton = getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});

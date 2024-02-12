import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login page when application starts', () => {
  const { getByRole } = render(<App />);
  const loginButton = getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});

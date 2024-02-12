// __tests__/unittests.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';

describe('Login Component', () => {
  test('renders login form correctly', () => {
    const { getByLabelText, getByText } = render(<Login />);
    
    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('handles form submission correctly with valid credentials', async () => {
    const fakeAuthToken = 'fakeAuthToken';
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true, authtoken: fakeAuthToken }),
    });

    const { getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(localStorage.getItem('token')).toEqual(fakeAuthToken));
    expect(window.location.href).toBe('/About');
  });

  test('handles form submission correctly with invalid credentials', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ success: false }),
    });

    const { getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(alert).toHaveBeenCalledWith('Invalid credentials'));
  });
});

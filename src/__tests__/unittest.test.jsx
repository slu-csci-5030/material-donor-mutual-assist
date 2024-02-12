import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';
import Login from '../Components/Login.js';

test('input values change correctly', () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('email@gmail.com');
    expect(passwordInput.value).toBe('password');
});

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

    fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(localStorage.getItem('token')).toEqual(fakeAuthToken));
    expect(window.location.href).toBe('http://localhost/');
  });

  
});
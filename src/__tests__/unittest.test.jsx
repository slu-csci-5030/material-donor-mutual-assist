import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('form submission works correctly', async () => {
  const { getByLabelText, getByText } = render(<Login />);
  const emailInput = getByLabelText('Email address');
  const passwordInput = getByLabelText('Password');
  const submitButton = getByText('Submit');

  fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(submitButton);
});
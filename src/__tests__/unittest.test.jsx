import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
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

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('displays alert for successful login', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Password*'), { target: { value: 'dts@123' } });
    fireEvent.click(screen.getByText('Login'));
    expect(window.alert).toHaveBeenCalledWith('Login successful');
});

test('renders the login form with username and password fields', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password*');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('allows user to input username and password', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password*');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });
  
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key]),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  it('should render login form', () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage />);
    
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password*')).toBeInTheDocument();
    expect(getByText('Forgot Password')).toBeInTheDocument();
  });

  it('should display alert on successful login', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<LoginPage />);

    // Mock user input
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(getByPlaceholderText('Password*'), { target: { value: 'dts@123' } });

    // Mock login button click
    fireEvent.click(getByRole('button', { name: 'Login' }));

    expect(window.alert).toHaveBeenCalledWith('Login successful');
  });

  it('should display alert on invalid username or password', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<LoginPage />);

    // Mock user input
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'wronguser' } });
    fireEvent.change(getByPlaceholderText('Password*'), { target: { value: 'wrongpassword' } });

    // Mock login button click
    fireEvent.click(getByRole('button', { name: 'Login' }));

    expect(window.alert).toHaveBeenCalledWith('Invalid username or password');
  });

  it('should display alert on user not found', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<LoginPage />);

    // Mock user input
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'nonexistentuser' } });
    fireEvent.change(getByPlaceholderText('Password*'), { target: { value: 'anypassword' } });

    // Mock login button click
    fireEvent.click(getByRole('button', { name: 'Login' }));

    expect(window.alert).toHaveBeenCalledWith('User not found');
  });
});

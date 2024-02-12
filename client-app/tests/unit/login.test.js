import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '@/pages/Auth/Login.jsx'; // Assuming the component path is correct

describe('Login Component', () => {
  let mockLoginFn;
  
  beforeEach(() => {
    mockLoginFn = jest.fn();
  });

  it('renders email and password form fields', () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('renders a login button', () => {
    const { getByText } = render(<Login />);
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  it('should store input values', () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(emailInput.value).toBe('test@gmail.com');
    expect(passwordInput.value).toBe('password');
  });

  it('calls login function when login button is clicked', () => {
    const { getByText } = render(<Login login={mockLoginFn} />);
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    expect(mockLoginFn).toHaveBeenCalled();
  });

  it('calls startReg function when create account is clicked', () => {
    const { getByText } = render(<Login />);
    const createAccountLink = getByText('Create new account');
    fireEvent.click(createAccountLink);
    // Assert whatever action this should trigger
  });

  it('calls forgotPassword function when forgot password link is clicked', () => {
    const { getByText } = render(<Login />);
    const forgotPasswordLink = getByText('Forgot password');
    fireEvent.click(forgotPasswordLink);
    // Assert whatever action this should trigger
  });
});

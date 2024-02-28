// __tests__/unittests.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Components/Login';
import Register from '../Components/Register';

describe('Register Component', () => {
  test('renders register form correctly', () => {
    const { getByLabelText, getByText } = render(<Register />);
    
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Register');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('updates input value', () => {
    // Render the Register component
    const { getByLabelText } = render(<Register />);
    
    // Get input elements by their respective labels
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
  
    // Simulate user input by changing the input values
    fireEvent.change(nameInput, { target: { value: 'test' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
    // Check if the input values are updated correctly
    expect(nameInput.value).toBe('test');
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testpassword');
  });

  

  // test('handles form submission correctly with valid credentials', async () => {
  //   const fakeAuthToken = 'fakeAuthToken';
  //   jest.spyOn(window, 'fetch').mockResolvedValueOnce({
  //     json: () => Promise.resolve({ success: true, authtoken: fakeAuthToken }),
  //   });

  //   const { getByLabelText, getByText } = render(<Register />);

  //   const nameInput = getByLabelText('Name');
  //   const emailInput = getByLabelText('Email address');
  //   const passwordInput = getByLabelText('Password');
  //   const submitButton = getByText('Register');

  //   fireEvent.change(nameInput, { target: { value: 'Random' } });
  //   fireEvent.change(emailInput, { target: { value: 'email1@gmail.com' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });
  //   fireEvent.click(submitButton);

  //   await waitFor(() => expect(localStorage.getItem('token')).toEqual(null));
  //   expect(window.location.href).toBe('http://localhost/');
  // });

});

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

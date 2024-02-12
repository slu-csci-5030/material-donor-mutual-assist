import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
    test('renders without crashing', () => {
        render(<LoginPage />);
        // Expecting that at least one element with the login label is rendered
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('submits form with valid credentials', () => {
        const mockUser = { username: 'user', password: 'dts@123' };
        const localStorageMock = {
            getItem: jest.fn().mockReturnValue(JSON.stringify(mockUser)),
            setItem: jest.fn(),
        };
        global.localStorage = localStorageMock;

        render(<LoginPage />);

        // Fill out the form
        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
        fireEvent.change(screen.getByPlaceholderText('Password*'), { target: { value: 'dts@123' } });

        // Submit the form
        fireEvent.click(screen.getByText('Login'));

        // Expect alert with 'Login successful'
        expect(window.alert).toHaveBeenCalledWith('Login successful');
    });
});

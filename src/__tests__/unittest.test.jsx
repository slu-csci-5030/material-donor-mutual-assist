import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Components/Login';

test('renders Login component without errors', () => {
    render(<Login />);
});

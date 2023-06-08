import React, {useContext} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';


// test('Test modal window', () => {
//     // Рендер компоненту
//     render(<Header />);
//
// });
describe('Header component', () => {
    test('should update email input value correctly', () => {
        const { getByPlaceholderText } = render(<Header />);
        const emailInput = getByPlaceholderText('Enter email');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        expect(emailInput.value).toBe('test@example.com');
    });

    test('should update password input value correctly', () => {
        const { getByPlaceholderText } = render(<Header />);
        const passwordInput = getByPlaceholderText('Enter password');

        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(passwordInput.value).toBe('password123');
    });

    test('should display email validation error', () => {
        const { getByPlaceholderText, getByText } = render(<Header />);
        const emailInput = getByPlaceholderText('Enter email');

        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
        fireEvent.blur(emailInput);

        const emailError = getByText('Incorrect email');
        expect(emailError).toBeInTheDocument();
    });

    test('should display password validation error', () => {
        const { getByPlaceholderText, getByText } = render(<Header />);
        const passwordInput = getByPlaceholderText('Enter password');

        fireEvent.change(passwordInput, { target: { value: 'pass' } });
        fireEvent.blur(passwordInput);

        const passwordError = getByText('The password must have at least 3 and no more than 8 characters');
        expect(passwordError).toBeInTheDocument();
    });

    // Add more test cases as needed
});

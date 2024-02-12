import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DonationForm from '../DonationForm';

test('displays confirmation message after donation submission', async () => {
  const { getByText, getByRole } = render(<DonationForm />);

  // Simulate donation submission
  fireEvent.click(getByRole('button', { name: 'Submit Donation' }));

  // Wait for confirmation message to appear
  const confirmationMessage = await getByText('Thank you for your donation!');
  expect(confirmationMessage).toBeInTheDocument();
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DonatedItemsList from '../Components/DonatedItemsList.js';

// Mocking react-router-dom's useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('search with item names', () => {
  render(
    <Router>
      <DonatedItemsList />
    </Router>
  );

  // Type 'Bicycle' in the search input
  fireEvent.change(screen.getByPlaceholderText('Search using Item Id, Name, Donor, Date, Program, or Status'), { target: { value: 'Bicycle' } });

  // Check if the table contains the searched item name
  const bicycleElements = screen.getAllByText('Bicycle');
  expect(bicycleElements.length-1).toBe(3);

  // Type 'Computer' in the search input
  fireEvent.change(screen.getByPlaceholderText('Search using Item Id, Name, Donor, Date, Program, or Status'), { target: { value: 'Computer' } });

  // Check if the table contains the searched item name
  const computerElements = screen.getAllByText('Computer');
  expect(computerElements.length-1).toBe(2);
});

test('filter by item names', () => {
  render(
    <Router>
      <DonatedItemsList />
    </Router>
  );

  // Select 'Bicycle' from the filter dropdown
  fireEvent.change(screen.getByText('Filter by Item Name'), { target: { value: 'Bicycle' } });

  // Check if the table contains only items with the selected item name
  const bicycleElements = screen.getAllByText('Bicycle');
  expect(bicycleElements.length-1).toBe(3);

});

test('filter by status', () =>{
render(
    <Router>
      <DonatedItemsList />
    </Router>
  );
  // Select 'Bicycle' from the filter dropdown
  fireEvent.change(screen.getByText('Filter by Status'), { target: { value: 'Bicycle' } });

  // Check if the table contains only items with the selected item name
  const bicycleElements = screen.getAllByText('Bicycle');
  expect(bicycleElements.length-1).toBe(3);

});

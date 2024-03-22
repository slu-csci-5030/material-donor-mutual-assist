import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import DonatedItemsList from './DonatedItemsList';

function ParentComponent() {
    console.log("donatedItems passed:", donatedItems);
  // Define the initial state for donated items
  const initialDonatedItems = [
    { id: 811253, name: 'Bicycle', donor: 'Mary', date: '2024-02-25', status: 'Donated' },
    { id: 811249, name: 'Computer', donor: 'James', date: '2024-02-06', status: 'In Storage Facility' },
    { id: 811247, name: 'Computer', donor: 'Vivian', date: '2024-01-26', status: 'Refurbished' },
    { id: 811246, name: 'Bicycle', donor: 'Elizabeth', date: '2024-01-21', status: 'Item Sold' },
    { id: 811240, name: 'Bicycle', donor: 'Peter', date: '2024-01-13', status: 'Received' }
  ];

  // Define state for donated items and filters
  const [donatedItems, setDonatedItems] = useState(initialDonatedItems);
  const [itemNameFilter, setItemNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Define the function to apply filters
  const handleApplyFilters = (itemNameFilter, statusFilter) => {
    // Update the filters state
    setItemNameFilter(itemNameFilter);
    setStatusFilter(statusFilter);
  };

  return (
    <div>
      {/* Render AdminHeader component and pass the apply filters function */}
      <AdminHeader onApplyFilters={handleApplyFilters} />
      {/* Render DonatedItemsList component and pass donated items and filters */}
      <DonatedItemsList donatedItems={donatedItems} itemNameFilter={itemNameFilter} statusFilter={statusFilter} />
    </div>
  );
}

export default ParentComponent;

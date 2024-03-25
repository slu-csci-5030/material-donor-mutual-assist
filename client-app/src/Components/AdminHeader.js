import React from 'react';

function AdminHeader({ itemNameFilter, statusFilter, onItemNameFilterChange, onStatusFilterChange }) {
  const handleNameFilterChange = (e) => {
    onItemNameFilterChange(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    onStatusFilterChange(e.target.value);
  };

  return (
    <div>
      <select id="itemNameFilter" className="filters-options" value={itemNameFilter} onChange={handleNameFilterChange}>
        <option value="">Filter by Item Name</option>
        <option value="Bicycle">Bicycle</option>
        <option value="Computer">Computer</option>
      </select>

      <select id="statusFilter" className="filters-options" value={statusFilter} onChange={handleStatusFilterChange}>
        <option value="">Filter by Status</option>
        <option value="Donated">Donated</option>
        <option value="In Storage Facility">In Storage Facility</option>
        <option value="Refurbished">Refurbished</option>
        <option value="Item Sold">Item Sold</option>
        <option value="Received">Received</option>
      </select>
    </div>
  );
}

export default AdminHeader;

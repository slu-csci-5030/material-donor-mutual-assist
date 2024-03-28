import React, { useState, useEffect } from 'react';
import '../css/AdminHeader.css';
import { FaSearch } from 'react-icons/fa';

function AdminHeader({ onSearch, onSort, onOpenFilters }) {
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    fetchAdminName(); // Fetch admin name when the component mounts
  }, []);

  const fetchAdminName = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/name", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you have an authentication token in localStorage
        }
      });
      const data = await response.json();
      if (data.success) {
        setAdminName(data.adminName); // Set admin name in state
      } else {
        console.error("Failed to fetch admin name:", data.error);
      }
    } catch (error) {
      console.error("Error fetching admin name:", error);
    }
  };

  // Remaining code for handling search, sort, and filters...

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.bworks.org/wp-content/themes/bworks/library/images/logo-bworks.png"
          alt="BWorks Logo"
          className="logo"
        />
      </div>

      <div className="search-bar">
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search using Item Id"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}><FaSearch /></button> {/* Search icon */}
      </div>

      <div className="options">
        <div className="dropdowns">
          {/* Display the fetched admin's name */}
          <p className="admin-name">Welcome, {adminName}</p>

          {/* Dropdowns for sort and filters */}
          {/* Sort options dropdown */}
          <select className="sort-options" onChange={handleSort}>
            {/* Options for sorting */}
          </select>

          {/* Filters options dropdown */}
          <select className="filters-options" onChange={onOpenFilters}>
            {/* Options for filters */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;

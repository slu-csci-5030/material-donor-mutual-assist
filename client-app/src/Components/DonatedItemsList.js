import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../css/AdminHeader.css';
import '../css/DonatedItemsList.css';

function DonatedItemsList() {
  const [searchInput, setSearchInput] = useState('');
  const [programFilter, setProgramFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [programOptions, setProgramOptions] = useState(['Youth Program', 'Retail Sales', 'Recycle', 'Earn-a-bicycle', 'Earn-a-computer']);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [assignProgramClicked, setAssignProgramClicked] = useState(false);

  const handleSearch = () => {
    const filtered = donatedItems.filter(item => {
      const searchLower = searchInput.toLowerCase();
      return (
        item.id.toString().includes(searchLower) ||
        item.name.toLowerCase().includes(searchLower) ||
        item.donor.toLowerCase().includes(searchLower) ||
        item.date.includes(searchLower) ||
        (programFilter !== '' && item.program.toLowerCase().includes(programFilter.toLowerCase())) ||
        (statusFilter !== '' && item.status.toLowerCase().includes(statusFilter.toLowerCase()))
      );
    });
    setFilteredItems(filtered);
  };

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  const updatePrograms = () => {
    const updatedItems = donatedItems.map(item => {
      if (selectedItems.includes(item.id)) {
        return { ...item, program: selectedProgram };
      }
      return item;
    });
    setDonatedItems(updatedItems);
    setSelectedItems([]); // Clear selected items after updating
    setAssignProgramClicked(false); // Hide assign program section
  };

  const toggleAssignProgram = () => {
    setAssignProgramClicked(!assignProgramClicked);
  };

  const handleHeaderFilter = (key) => {
    if (key === 'program') {
      setProgramFilter('');
    } else if (key === 'status') {
      setStatusFilter('');
    }
  };

  const [donatedItems, setDonatedItems] = useState([
    { id: 811253, name: 'Bicycle', donor: 'Mary', date: '2024-02-25', program: 'Not Assigned', status: 'Donated' },
    { id: 811249, name: 'Computer', donor: 'James', date: '2024-02-06', program: 'Not Assigned', status: 'In Storage Facility' },
    { id: 811247, name: 'Computer', donor: 'Vivian', date: '2024-01-26', program: 'Not Assigned', status: 'Refurbished' },
    { id: 811246, name: 'Bicycle', donor: 'Elizabeth', date: '2024-01-21', program: 'Not Assigned', status: 'Item Sold' },
    { id: 811240, name: 'Bicycle', donor: 'Peter', date: '2024-01-13', program: 'Not Assigned', status: 'Received' }
    // Add more items here...
  ]);

  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img
            src="https://www.bworks.org/wp-content/themes/bworks/library/images/logo-bworks.png"
            alt="BWorks Logo"
            className="logo"
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search using Item Id, Name, Donor, Date, Program, or Status"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}><FaSearch /></button>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button onClick={toggleAssignProgram}>
            {assignProgramClicked ? "Hide Assign Program" : "Assign Program"}
          </button>
        </div>
        {assignProgramClicked && (
          <div>
            <select value={selectedProgram} onChange={handleProgramChange}>
              <option value="">Select Program</option>
              {programOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <button onClick={updatePrograms}>Update Programs</button>
          </div>
        )}
      </div>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Program"
          value={programFilter}
          onChange={(e) => setProgramFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        />
      </div>
      <table className="item-list">
        <thead>
          <tr>
            <th onClick={() => handleHeaderFilter('id')}>S.No</th>
            <th onClick={() => handleHeaderFilter('id')}>Item_ID</th>
            <th onClick={() => handleHeaderFilter('name')}>Item_Name</th>
            <th onClick={() => handleHeaderFilter('donor')}>Donor Name</th>
            <th onClick={() => handleHeaderFilter('date')}>Donation Date</th>
            <th onClick={() => handleHeaderFilter('program')}>Program</th>
            <th onClick={() => handleHeaderFilter('status')}>Status</th>
            {assignProgramClicked && <th>Select</th>}
          </tr>
        </thead>
        <tbody>
          {/* Display filtered items or original data based on search results */}
          {(filteredItems.length > 0 ? filteredItems : donatedItems).map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td><Link to={`/item/${item.id}`} state={{ itemInfo: item }}>{item.id}</Link></td>
              <td>{item.name}</td>
              <td>{item.donor}</td>
              <td>{item.date}</td>
              <td>{item.program}</td>
              <td>{item.status}</td>
              {assignProgramClicked && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonatedItemsList;

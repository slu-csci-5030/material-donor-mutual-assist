import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DonatedItemsList.css';

function DonatedItemsList({ donatedItems = [], itemNameFilter, statusFilter }) {
  // Error handling for invalid donatedItems data
  if (!Array.isArray(donatedItems)) {
    console.error("Invalid donated items data provided.");
    return null;
  }

  // Filtering logic
  const filteredItems = donatedItems.filter(item => {
    const nameCondition = !itemNameFilter || item.name.toLowerCase().includes(itemNameFilter.toLowerCase());
    const statusCondition = !statusFilter || item.status === statusFilter;
    return nameCondition && statusCondition;
  });

  return (
    <table className="item-list">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item_ID</th>
          <th>Item_Name</th>
          <th>Donor Name</th>
          <th>Donation Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td><Link to={`/item/${item.id}`} state={{ itemInfo: item }}>{item.id}</Link></td>
            <td>{item.name}</td>
            <td>{item.donor}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DonatedItemsList;

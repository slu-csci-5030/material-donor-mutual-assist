import React, { useState } from 'react';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useState({
    startDate: '',
    endDate: '',
    timeDuration: '',
    donorName: '',
    objectType: '',
    minAmount: '',
    maxAmount: '',
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
    
      console.log('Search Parameters:', searchParams);
    } else {
      console.log('Form validation failed');
    }
  };
  const validateForm = () => {
    if (searchParams.startDate && searchParams.endDate) {
      const startDate = new Date(searchParams.startDate);
      const endDate = new Date(searchParams.endDate);
      if (startDate > endDate) {
        alert('Start date must be before end date');
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <h2>Search Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={searchParams.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={searchParams.endDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="timeDuration">Time Duration:</label>
          <input
            type="text"
            id="timeDuration"
            name="timeDuration"
            placeholder="Enter duration in hours"
            value={searchParams.timeDuration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="donorName">Donor Name:</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={searchParams.donorName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="objectType">Type of Object:</label>
          <select
            id="objectType"
            name="objectType"
            value={searchParams.objectType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="minAmount">Minimum Amount:</label>
          <input
            type="number"
            id="minAmount"
            name="minAmount"
            value={searchParams.minAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="maxAmount">Maximum Amount:</label>
          <input
            type="number"
            id="maxAmount"
            name="maxAmount"
            value={searchParams.maxAmount}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

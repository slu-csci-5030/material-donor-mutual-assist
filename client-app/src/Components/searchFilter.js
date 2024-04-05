import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [donorName, setDonorName] = useState('');
    const [objectType, setObjectType] = useState('');

    const handleSearch = () => {
        onSearch({ startDate, endDate, donorName, objectType });
    };

    return (
        <div>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <input type="text" placeholder="Donor Name" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
            <select value={objectType} onChange={(e) => setObjectType(e.target.value)}>
                <option value="">Select status</option>
                <option value="Type A">Donated</option>
                <option value="Type B">In Storage Facility</option>
                <option value="Type C">Refurbished</option>
                <option value="Type D">item Sold</option>
                <option value="Type E">Recieved</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchFilter;


import React, { useState } from 'react';
import SearchFilter from './searchFilter';

const MainComponent = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (searchParams) => {
        try {
            const response = await fetch(`/api/search?${new URLSearchParams(searchParams)}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Material Donor Mutual Assist Project</h1>
            <SearchFilter onSearch={handleSearch} />
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>
                        Donor: {result.donorName}, Type: {result.objectType}, Date: {result.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainComponent;

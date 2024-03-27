import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DonatedPeopleList.css';

function DonatedPeopleList() {
  // Sample data for demonstration
  const donatedPeople = [
    { id: 1, name: 'Mary', totalItemsDonated: 3 },
    { id: 2, name: 'James', totalItemsDonated: 2 },
    { id: 3, name: 'Vivian', totalItemsDonated: 1 },
    { id: 4, name: 'Elizabeth', totalItemsDonated: 1 },
    { id: 5, name: 'Peter', totalItemsDonated: 1 }
    // Add more people here...
  ];

  return (
    <table className="people-list">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Donor Name</th>
          <th>Total Items Donated</th>
        </tr>
      </thead>
      <tbody>
        {donatedPeople.map((person, index) => (
          <tr key={person.id}>
            <td>{index + 1}</td>
            <td><Link to={`/donor/${person.id}`} state={{ donorInfo: person }}>{person.name}</Link></td>
            <td>{person.totalItemsDonated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DonatedPeopleList;
[]
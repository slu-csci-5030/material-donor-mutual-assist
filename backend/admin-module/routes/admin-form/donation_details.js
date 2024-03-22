import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function DonationFormPage() {
  const location = useLocation();
  const donorDetails = location.state?.donorDetails || {};
  const [donationData, setDonationData] = useState({
    donationType: '',
    duration: ''
    // Add more donation details as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation form submission (e.g., send data to server)
    console.log('Donation Data:', donationData);
  };

  return (
    <div>
      <h1>Donation Form Page</h1>
      <h2>Donor Details:</h2>
      <p>Name: {donorDetails.name}</p>
      <p>Email: {donorDetails.email}</p>
      <p>Address: {donorDetails.address}</p>
      <p>Donation type: {donorDetails.name}</p>
      <p>Donation frequency: {donorDetails.name}</p>

      <form onSubmit={handleSubmit}>
        <label>Donation Type:</label>
        <input type="text" name="donationType" value={donationData.donationType} onChange={handleChange} required /><br />

        <label>Donation frequency:</label>
        <input type="text" name="duration" value={donationData.duration} onChange={handleChange} required /><br />

        

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
}

export default DonationFormPage;

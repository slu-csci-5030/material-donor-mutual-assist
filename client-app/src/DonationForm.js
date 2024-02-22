import React, { useState } from 'react';

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationMessage, setDonationMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonationMessageChange = (event) => {
    setDonationMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit donation details to backend
    console.log('Donation submitted:', donationAmount, donationMessage);
    // Set submitted state to true
    setSubmitted(true);
    // Clear the form fields after submission
    setDonationAmount('');
    setDonationMessage('');
  };

  return (
    <div>
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="donationAmount">Donation Amount:</label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={handleDonationAmountChange}
          />
        </div>
        <div>
          <label htmlFor="donationMessage">Donation Message:</label>
          <textarea
            id="donationMessage"
            value={donationMessage}
            onChange={handleDonationMessageChange}
          ></textarea>
        </div>
        <button type="submit">Submit Donation</button>
      </form>
      {submitted && <p>Thank you for your donation!</p>} {/* Conditionally render the confirmation message */}
    </div>
  );
}

export default DonationForm;


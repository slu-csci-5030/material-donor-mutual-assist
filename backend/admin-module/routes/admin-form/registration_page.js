import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegistrationPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to donation form page with donor details
    history.push({
      pathname: '/donation-form',
      state: { donorDetails: formData }
    });
  };

  return (
    <div>
      <h1>Admin Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

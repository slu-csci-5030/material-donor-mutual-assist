import React, { useState } from 'react';

const AddDonations = () => {
    const [donation, setDonation] = useState({ type: "", description: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!donation.type.trim() || !donation.description.trim()) {
            setErrorMessage("Both fields are required!");
            return;
        }

        // Here you can implement the logic to send the donation data to the server
        // For demonstration purposes, I'm just displaying a success message
        setSuccessMessage("Donation added successfully!");

        // Reset the form and clear error message
        setDonation({ type: "", description: "" });
        setErrorMessage("");
    };

    const handleChange = (e) => {
        // Clear error message when user starts typing again
        setErrorMessage("");
        setDonation({ ...donation, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Add Donation</h2>
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="donationType" className="form-label">Type of Donation</label>
                    <input type="text" className="form-control" id="donationType" name="type" value={donation.type} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="donationDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="donationDescription" name="description" value={donation.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddDonations;


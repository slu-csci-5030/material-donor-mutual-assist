import React, { useState, useEffect } from 'react';
import '../css/StatusDisplayPage.css';
const DonorForm = () => {
    const [donorInfo, setDonorInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        status: {
            donated: false,
            inStorageFacility: false,
            refurbished: false,
            received: false,
            sold: false
        }
    });

    // Simulating API call to fetch donor data
    useEffect(() => {
        // Replace with your actual API call logic
        // For now, setting dummy data
        const dummyData = {
            fullName: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            status: {
                donated: true,
                inStorageFacility: true,
                refurbished: true,
                received: true,
                sold: true
            }
        };
        setDonorInfo(dummyData);
    }, []);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setDonorInfo({
            ...donorInfo,
            status: { ...donorInfo.status, [name]: checked }
        });
    };

    return (
        <div className="donor-form">
            <img
                src="https://www.bworks.org/wp-content/themes/bworks/library/images/logo-bworks.png" 
                alt="BWorks Logo"
                className="bworks-logo"
            />
            <p>Item: 8112419</p>

            <label>
                Donor Full Name:{donorInfo.fullName}
            </label>
            <br></br>
            <label>
                Email Address:{donorInfo.email}
            </label>
            <br></br>
            <label>
                Phone Number:{donorInfo.phone}
            </label>
            <br></br>
            <label>
                Address:{donorInfo.address}
            </label>
            <br></br>
            <label>
                <input
                    type="radio"
                    name="status"
                    checked={donorInfo.status.donated}
                    onChange={handleCheckboxChange}
                    
                    
                />
                Donated
            </label>
            <br></br>
            <label>
                <input
                    type="radio"
                    name="status"
                    checked={donorInfo.status.inStorageFacility}
                    onChange={handleCheckboxChange}
                />
                In Storage Facility
            </label>
            <br></br>
            <label>
                
                <input
                    type="radio"
                    name="status"
                    checked={donorInfo.status.refurbished}
                    onChange={handleCheckboxChange}
                    
                />
                Refurbished
            </label>
            <br></br>
            <label>
                
                <input
                    type="radio"
                    name="status"
                    checked={donorInfo.status.received}
                    onChange={handleCheckboxChange}
                    
                />
                Received
            </label>
            <br></br>
            <label>
                
                <input
                    type="radio"
                    name="status"
                    checked={donorInfo.status.sold}
                    onChange={handleCheckboxChange}
                    
                />
                Sold
            </label>
            <br></br>
            <button type="button">Cancel</button>
            <br></br>
            <button type="submit">Save Changes</button>
        </div>
    );
};

export default DonorForm;

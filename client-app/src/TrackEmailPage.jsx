import React, { useState } from 'react';
import axios from 'axios';

const TrackEmailPage = () => {
    const [resendStatus, setResendStatus] = useState('');

    const handleResendEmail = () => {
        // Make a POST request to the backend to resend the email
        axios.post('/resend-email', {
            to: 'medikondaajaykumar3@gmail.com', // recipient email
            subject: 'Resending this email',
            body: 'email body about the resending information'
        })
        .then(response => {
            console.log(response.data);
            setResendStatus('Email resent successfully');
        })
        .catch(error => {
            console.error(error);
            setResendStatus('Error resending email');
        });
    };

    return (
        <div>
            <h1>Track Email Page</h1>
            <button onClick={handleResendEmail}>Resend Email</button>
            {resendStatus && <p>{resendStatus}</p>}
        </div>
    );
};

export default TrackEmailPage;

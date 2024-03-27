import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackEmailPage = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        // Fetch email data when component mounts
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/emails');
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails: ', error);
        }
    };

    return (
        <div>
            <h1>Track Email Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Recipient</th>
                        <th>Subject</th>
                        <th>Sent Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map(email => (
                        <tr key={email.id}>
                            <td>{email.recipient}</td>
                            <td>{email.subject}</td>
                            <td>{email.sentDate}</td>
                            <td>{email.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrackEmailPage;

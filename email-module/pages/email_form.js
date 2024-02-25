import React, { useState } from 'react';

const EmailForm = () => {
  const [message, setMessage] = useState('');
  const [photos, setPhotos] = useState('');
  const [briefHistory, setBriefHistory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      message,
      photos,
      briefHistory,
      date,
      time
    };
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent to Donor successfully!');
        } else {
          console.error('Failed to send email to Donor.');
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student's Message:
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <label>
        Photos:
        <input type="file" onChange={e => setPhotos(e.target.files[0])} />
      </label>
      <label>
        Brief History:
        <textarea value={briefHistory} onChange={e => setBriefHistory(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;

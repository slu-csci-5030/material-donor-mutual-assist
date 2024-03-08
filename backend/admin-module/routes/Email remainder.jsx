import React, { useState } from 'react';

const ReminderForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send reminder email functionality here
    console.log('Sending reminder email to:', email);
    console.log('Reminder message:', message);
    console.log('Reminder date:', reminderDate);
    // You can use an API call to send this data to your backend for processing
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Reminder Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Reminder Date:
        <input
          type="date"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Send Reminder Email</button>
    </form>
  );
};

export default ReminderForm;

import React, { useState } from 'react';
import { connect, createInbox } from '@nats.io/nats.ws';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleMessageSubmit = async () => {
    try {
      // Connect to NATS server
      const nc = await connect({ servers: ['wss://demo.nats.io:443'] });
      console.log('Connected to NATS server');

      // Publish message to student-message channel
      const inbox = createInbox();
      const payload = JSON.stringify({ studentId: 'student123', donorId: 'donor456', message, photos });
      await nc.publish('student-message', payload, inbox);
      console.log('Message sent to NATS server:', payload);

      // Close NATS connection
      nc.close();
      console.log('Disconnected from NATS server');
    } catch (error) {
      console.error('Error connecting to NATS server:', error);
    }
  };

  return (
    <div>
      <h2>Send Message to Donor</h2>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
      <input type="file" onChange={(e) => setPhotos(e.target.files)} multiple />
      <button onClick={handleMessageSubmit}>Send Message</button>
    </div>
  );
};

export default SendMessage;

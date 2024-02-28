/* code specifies integrating NATS messaging into a React frontend. 
this example includes error handling, message publishing functionality, and better organization of code
Here the URL used 'ws://localhost:4222' is only for running a NATS server locally and we need to change that. */


import React, { useState, useEffect } from 'react';
import { connect, StringCodec } from 'nats.ws';

const NATS_SERVER_URL = 'ws://localhost:4222'; 
// Replace with your NATS server URL

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Connect to NATS server
    const nc = connect({ url: NATS_SERVER_URL });

    // Subscribe to NATS subject
    const subscription = nc.subscribe('newMessage', (err, msg) => {
      if (err) {
        console.error('Error subscribing to NATS subject:', err);
        return;
      }
      // Update messages state with received message
      setMessages(prevMessages => [...prevMessages, msg.data]);
    });

    // Clean up subscription and close connection when component unmounts
    return () => {
      subscription.unsubscribe();
      nc.close();
    };
  }, []); // Run effect only once on component mount

  // Function to handle sending a new message to NATS
  const sendMessage = async () => {
    if (!newMessage.trim()) {
      alert('Please enter a message');
      return;
    }
    
    // Connect to NATS server
    const nc = connect({ url: NATS_SERVER_URL });

    try {
      // Publish message to NATS subject
      await nc.publish('newMessage', StringCodec().encode(newMessage));
      setNewMessage('');
    } catch (err) {
      console.error('Error publishing message:', err);
      alert('Failed to send message. Please try again later.');
    } finally {
      // Close the NATS connection
      await nc.close();
    }
  };

  return (
    <div>
      <h1>Messages Received from NATS:</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="this is the process change notification"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;

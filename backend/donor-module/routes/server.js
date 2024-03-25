const express = require('express');
const { connect } = require('nats');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect NATS server
connect({ servers: ['nats://localhost:4222'] })
  .then((nc) => {
    console.log('Connected to NATS server');
    const subscription = nc.subscribe('student-message', async (msg) => {
      try {
        const { studentId, donorId, message, photos } = JSON.parse(msg.data);
        console.log(`Received message from student ${studentId} for donor ${donorId}: ${message}`);
        console.log(`Attached photos:`, photos);
        msg.respond();
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });
  })
  .catch((error) => {
    console.error('Error connecting to NATS server:', error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

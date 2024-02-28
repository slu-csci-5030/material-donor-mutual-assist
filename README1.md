
<p>Here is the code which i have worked on to know about how to coonect the nats and sending the message when the status of item is change. Here the connection is only locally established and need to work on some extrathings to connect this so i am just Putting this in readme file <p>
<pre>
\```javascript

const NATS = require('nats');
const nodemailer = require('nodemailer');

// Connect to NATS server
const nc = NATS.connect({
  servers: ['nats://localhost:4222'], // Update with your NATS server URL
});

// Create a transporter for sending emails using Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Update with your Gmail email address
    pass: 'your_password', // Update with your Gmail app password
  },
});

// Subscribe to a NATS subject for status change notifications
nc.subscribe('itemStatusChange', (msg) => {
  // Parse incoming message content
  const { donorEmail, itemName, newStatus } = JSON.parse(msg);

  // Trigger sending of email notification to donor
  sendEmailToDonor(donorEmail, itemName, newStatus);
});

// Function to send email notification to donor
function sendEmailToDonor(donorEmail, itemName, newStatus) {
  // Send email using Nodemailer
  const mailOptions = {
    from: 'your_email@gmail.com', // Update with your email address
    to: donorEmail,
    subject: 'Item Status Update',
    text: `Dear donor,\n\nThe status of your donated item "${itemName}" has been updated to "${newStatus}".\n\nRegards,\nYour Organization`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email notification sent to donor successfully:', info.response);
    }
  });
}


\```
</pre>
// Generalk code to understand how different notification should display
// not for main branch integration
//this is for only to specify my understanding 


const nodemailer = require('nodemailer');
const env = require('../env');

// Function to send email
function sendEmail(to, subject, body) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL,
      pass: env.PASSWORD
    }
  });

  const mailOptions = {
    from: env.EMAIL,
    to: to,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Logic to detect status change and send email
function handleStatusChange(item, newStatus) {

  // Send email to donor
  const to = 'recipient@example.com'; // Replace with actual donor email
  const subject = 'Status Update: Your Donated Item';
  const body = `Dear Donor,\n\nThe status of your donated item has been changed to "${newStatus}".\n\nThank you for your contribution.\n\nSincerely,\nThe Donation Team`;
  sendEmail(to, subject, body);
}

// Route handler to handle status change
router.post('/status-change', function(req, res) {
  const { itemId, newStatus } = req.body;
  // Update status of item in the database
  // Call handleStatusChange function to send email
  handleStatusChange(itemId, newStatus);
  res.send('Status updated successfully');
});

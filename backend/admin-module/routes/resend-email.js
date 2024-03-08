const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = require('../env');

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: medikondaajaykumar3,
        pass: 1234324
    }
});
// Handle POST request to resend email
router.post('/', function(req, res, next) {
    const { to, subject, body } = req.body;
    // Send email using nodemailer
    transporter.sendMail({
        from: EMAIL,
        to: to,
        subject: subject,
        text: body
    }, function(error, info) {
        if (error) {
            console.error(error);
            res.status(500).send('Error resending email');
        } else {
            console.log('Email resent: ' + info.response);
            res.status(200).send('Email resent successfully');
        }
    });
});

module.exports = router;

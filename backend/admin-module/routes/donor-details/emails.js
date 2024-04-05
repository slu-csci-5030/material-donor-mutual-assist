const express = require('express');
const router = express.Router();
const emailsRouter = require('../backend/admin-module/routers/donor-details/emails');
router.get('/', async (req, res) => {
    try {
        const emails = await Email.find(); // Fetch all emails from the database
        res.json(emails);
    } catch (error) {
        console.error('Error fetching emails: ', error);
        res.status(500).json({ message: 'Error fetching emails' });
    }
});

module.exports = router;

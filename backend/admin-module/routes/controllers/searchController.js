const { YourModel } = require('../models');

exports.search = async (req, res) => {
    try {
        const { startDate, endDate, donorName, objectType } = req.query;
        
        let query = YourModel.query();

        if (startDate) {
            query = query.where('created_at', '>=', startDate);
        }
        if (endDate) {
            query = query.where('created_at', '<=', endDate);
        }
        if (donorName) {
            query = query.where('donor_name', 'like', `%${donorName}%`);
        }
        if (objectType) {
            query = query.where('object_type', objectType);
        }

        const results = await query;

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

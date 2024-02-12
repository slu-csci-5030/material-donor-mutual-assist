const request = require('supertest');
const app = require('./app'); // the Express app
const donorsRouter = require('./routes/crud_donors');
const donorsData = require('./crud_donors.testdata');

const mockDonationsData = [
  // Mock data for edge cases, invalid data, etc.
];

jest.mock('./routes/crud_donors', () => {
  const express = require('express');
  const router = express.Router();

  // Mock specific CRUD operations if needed (e.g., GET by donorId)
  router.get('/donors/:donorId/donations', (req, res) => {
    const donorId = parseInt(req.params.donorId);
    // Handle finding/returning/erroring based on mock data and logic
  });

  // Add other mocked CRUD operations as needed

  return router;
});

app.use('/donors', donorsRouter);

describe('GET /donors', () => {
  jest.setTimeout(10000);

  it('should return a list of all donors', async () => {
    const response = await request(app).get('/donors');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(donorsData);
  });

  // Add other GET tests (e.g., by donorId, filter, etc.)
});

// Add tests for other CRUD operations (POST, PUT, DELETE)
// using mock data and route expectations

module.exports = {
  donorsData,
  mockDonationsData,
};


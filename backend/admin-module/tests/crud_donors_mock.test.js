const request = require('supertest'); 
const app = require('../app'); // the Express app
const donorsRouter = require('../routes/crud_donors');
const donorData = require('./crud_donors.testdata');

jest.mock('../routes/crud_donors', () => {
  const express = require('express');
  const donorsData = require('./crud_donors.testdata')
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json(donorsData);
  });

  return router;
});

app.use('/donors', donorsRouter);

describe('GET /donors', () => {
  jest.setTimeout(10000);

  it('should return a list of donors', async () => {
    const response = await request(app).get('/donors');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(donorData);
  });

});
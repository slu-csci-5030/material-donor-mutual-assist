const express = require('express');

const supertest = require('supertest');
const donarListRouter = require('../routes/donars_List');

const app = express();
app.use('/donorsList', donarListRouter);

// The below test is written using jest testing framework

describe('Testing the donors list for the endpoint /donarsList', () => {
  it('rendors json data conatining list of donors', async () => {
    const response = await supertest(app).get('/donorsList');
    // Asset statements
    expect(response.status).toBe(200);
    
    expect(response.body).toEqual([
        { id: 1, name: 'shiva', email_id: 'aws@gmail.com', phone_no: '476788',address: 'fsdbgfd'},
        { id: 2, name: 'dsfaewr' ,email_id: 'qas@gmail.com', phone_no: '43565476878',address: 'gfsht'}
    ]);
  });
});

describe('A test that pass for each iteration', () => {
    it('should always pass', () => {
      expect(false).toBe(false);
    });
  });
  
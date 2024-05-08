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
        { id: 1, name: 'Sri', email_id: 'srinivas@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'},
        { id: 2, name: 'Siri' ,email_id: 'siri@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'}
   ]);
  });
});

describe('A test that pass for each iteration', () => {
    it('should always pass', () => {
      expect(false).toBe(false);
    });
  });
  
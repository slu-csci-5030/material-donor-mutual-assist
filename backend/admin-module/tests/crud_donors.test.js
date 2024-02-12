const express = require('express');
const supertest = require('supertest');
const router = require('../routes/crud_donors');

const app = express();
app.use('/', router);

describe('GET / endpoint', () => {
  it('responds with JSON containing all donors', async () => {
    const response = await supertest(app).get('/');
    
    // Assert the response status code
    expect(response.status).toBe(200);
    
    // Assert the response body contains the expected donors
    expect(response.body).toEqual([
      { id: 1, name: 'Alice', email: 'abc@abcd.com', phone: '2121212121', address_line_1: '12, some street' },
      { id: 2, name: 'Bob', email: 'bob@abcd.com', phone: '3232323232', address_line_1: '34, same street' }
    ]);
  });
});

//a sample test case
describe('A test case that always passes', () => {
    it('should always pass', () => {
      // Assert true is always true, so this test will always pass
      expect(true).toBe(true);
    });
  });
  
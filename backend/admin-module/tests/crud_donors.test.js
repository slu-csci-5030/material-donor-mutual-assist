// Import necessary modules and the router
const express = require('express');
const supertest = require('supertest');
const router = require('../routes/crud_donors'); // Assuming your router file is named router.js

// Create a test app using express
const app = express();
app.use('/', router);

// Define the test using Jest
describe('GET / endpoint', () => {
  it('responds with JSON containing all donors', async () => {
    // Send a GET request to the endpoint
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

describe('A test case that always passes', () => {
    it('should always pass', () => {
      // Assert true is always true, so this test will always pass
      expect(true).toBe(true);
    });
  });
  
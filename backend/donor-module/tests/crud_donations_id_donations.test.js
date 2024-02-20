// Import necessary modules and the router
const express = require('express');
const supertest = require('supertest');
const router = require('../routes/crud_donations'); // Assuming your router file is named router.js

// Create a test app using express
const app = express();
app.use('/', router);

// Define the test using Jest
describe('GET / endpoint', () => {
  it('responds with JSON containing all donations list', async () => {
    // Send a GET request to the endpoint
    const response = await supertest(app).get('/');
    
    // Assert the response status code
    expect(response.status).toBe(200);
    
    // Assert the response body containing donations list
    expect(response.body).toEqual([
      { id: 1, name: 'Alice', donations: 'Laptop', Quantity: '1'},
      { id: 2, name: 'Robby', donations: 'Microphone', Quantity: '1'},
      { id: 3, name: 'Vicky', donations: 'Mobile', Quantity: '1'},
      { id: 4, name: 'Ramu', donations: 'Bicycle', Quantity: '1'},
      { id: 5, name: 'John', donations: 'Computer', Quantity: '1'},
    ]);
  });
});

describe('A test case that always passes', () => {
    it('should always pass', () => {
      // Assert true is always true, so this test will always pass
      expect(true).toBe(true);
    });
  });
  

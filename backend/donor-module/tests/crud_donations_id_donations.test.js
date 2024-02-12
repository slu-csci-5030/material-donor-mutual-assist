const express = require('express');
const supertest = require('supertest');
const router = require('../routes/donations'); // Adjust path if needed
const app = express();
app.use('/', router);
describe('Donations API Unit Tests', () => )
  // GET /:donorId/donations tests
  it('responds with JSON containing donor name and donations for a valid donor', async () => {
    const donorId = 1; // Replace with a valid donor ID
    const expectedDonor = donors.find(d => d.id === donorId);
    const response = await supertest(app).get(`/donations/${donorId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: expectedDonor.name,
      donations: expectedDonor.donations
    });
  });
  it('responds with 404 for a non-existent donor', async () => {
    const invalidId = 99;
    const response = await supertest(app).get(`/donations/${invalidId}`);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message'); // Verify error message
  });
  // Add more GET-related tests here (e.g., pagination, filtering)
  // POST /:donorId/donations tests
  it('creates a new donation with valid data', async () => {
    const donorId = 1; // Replace with a valid donor ID
    const newDonation = { item: "Toys", date: "2024-02-12" };
    const response = await supertest(app).post(`/donations/${donorId}`).send(newDonation);
    expect(response.status).toBe(201); // Created
    expect(response.body).toHaveProperty('id'); // Check if ID is assigned
    expect(donors.find(d => d.id === donorId).donations.length).toBe(3); // Verify donation added
  });
  it('returns 400 for invalid donation data', async () => {
    const donorId = 1; // Replace with a valid donor ID
    const invalidDonation = {};
    const response = await supertest(app).post(`/donations/${donorId}`).send(invalidDonation);
    expect(response.status).toBe(400); // Bad Request
    expect(response.body).toHaveProperty('message'); // Verify error message
  });
  // Add more POST-related tests here (e.g., user authorization, duplicate donations)

  // PUT /:donorId/donations/:donationId tests
  it('updates an existing donation with valid data', async () => {
    const donorId = 1; // Replace with a valid donor ID
    const originalDonation = donors.find(d => d.id === donorId).donations[0];
    const updatedDonation = { ...originalDonation, item: "Games" };

    const response = await supertest(app)
      .put(`/donations/<span class="math-inline">\{donorId\}/</span>{originalDonation.id}`)
      .send(updatedDonation);

    expect(response.status).toBe(200); // Updated
    expect(donors.find(d => d.id === donorId).donations[0]).not.toEqual(originalDonation); // Verify modification
    expect(donors.find(d => d.id === donorId).donations[0]).toEqual(updatedDonation); // Check updated values

    // Restore original data for future tests
    donors.find(d => d.id === donorId).donations[0] = originalDonation;
  });

  it('returns 404 for non-existent donation', async () => {
    const donorId = 1; // Replace with a valid donor ID
    const invalidId = 99;
    const updatedDonation = { item: "New Item" };

    const response = await supertest(app)
      .put(`/donations/<span class="math-inline">\{donorId\}/</span>{invalidId}`)
      .send(updatedDonation);

    expect(response.status).toBe(404); // Not Found
    expect(response.body).toHaveProperty('message'); // Verify error message
  });

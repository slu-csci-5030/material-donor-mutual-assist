
const testData = require('./test_data'); // Assuming 'test_data.js' contains Bob's data

describe('GET / endpoint', () => {
  beforeEach(() => {
    donors.push(testData.bob); // Add Bob to donors array
  });

  afterEach(() => {
    donors.pop(); // Remove Bob from donors array
  });

  it('responds with JSON containing all donors', async () => {
    const response = await supertest(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(donors);
  });

  it('responds with 404 if no donors found', async () => {
    donors.pop(); // Remove all donors
    const response = await supertest(app).get('/');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'No donors found' });
  });
});

import app from '../app'
import supertest from 'supertest'

describe('Get and Add Donor details as admin', () => {
  it('Should respond with 200 status code', async () => {
    const response = await supertest(app).get('/admin/donors')
    expect(response.status).toBe(200)
  })
  it('Should add only 1 test user for the post call', async () => {
    const requestBody = {
      name: 'Test 1',
      donations: [100, 1283, 849]
    }
    const response = await supertest(app).post('/admin/add-donor').send(requestBody)

    expect(response.status).toBe(200)
  })
})

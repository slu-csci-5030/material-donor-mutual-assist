import app from '../app'
import supertest from 'supertest'

describe('Get Users', () => {
  it('Should respond with 200 status code: ', async () => {
    const response = await supertest(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

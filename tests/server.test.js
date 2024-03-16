import app from '../app'
import supertest from 'supertest'

describe('Get Users', () => {
  it('Should respond with 200 status code: ', async () => {
    const response = await supertest(app).get('/')
    expect(response.statusCode).toBe(200)
  })
  it('Should display relevant message to the new user', async () => {
    const response = await supertest(app).get('/users/getmessage/sravya')
    expect(response.text).toBe('Hi sravya! Welcome to the donation club!!!')
    expect(response.status).toBe(200)
  })
})

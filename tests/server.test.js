import app from '../app'
import supertest from 'supertest'
import Data from '../datafiles/DonorData.json'

describe('Get User Message', () => {
  it('Should respond with 200 status code: ', async () => {
    const response = await supertest(app).get('/')
    expect(response.statusCode).toBe(200)
  })
  it('Should display relevant message to the new user', async () => {
    const response = await supertest(app).get('/donor/getmessage/sravya')
    expect(response.text).toBe('Hi sravya! Welcome to the donation club!!!')
    expect(response.status).toBe(200)
  })
  it('Should display the list of donor from the sample dataset', async () => {
    const response = await supertest(app).get('/donor/')
    expect(response.body).toStrictEqual(Data)
    expect(response.status).toBe(200)
  })
})

import server from './server.js'
import supertest from 'supertest'

describe('Test example', () => {
  test('GET /', (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
    // More logic goes here
  })
  // More things come here
})

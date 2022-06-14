import supertest from 'supertest'
import app from 'app'

const request = supertest(app)

const BASE_API_URL = '/'

// 1. Testing the server
describe('Testing the server', () => {
  it('1. Should get list of all campaigns with descending order of total amount', async () => {
    const response = await request.get(`${BASE_API_URL}`)

    expect(response.statusCode).toEqual(200)

    const { status } = response.body

    expect(status).toEqual(true)
  })
})

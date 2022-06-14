import { Request, Response } from 'express'
import { generateAPIResponse } from 'utils'

// Testing
const testingRouter = async (request: Request, response: Response) => {
  //   return generateAPIResponse(response, {}, true, 200, 'Test Successful')
  return generateAPIResponse({ response, status: true, statusCode: 200, message: 'Test Successful' })
}

export { testingRouter }

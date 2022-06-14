import { Response } from 'express'

export type GenerateAPIResponseType = {
  response: Response
  data?: any
  status: boolean
  statusCode: number
  message?: string
  errorMessage?: string
}

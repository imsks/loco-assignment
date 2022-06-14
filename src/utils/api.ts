import { GenerateAPIResponseType } from 'interfaces'

const generateAPIResponse = ({
  response,
  data,
  status,
  statusCode,
  message,
  errorMessage,
}: GenerateAPIResponseType) => {
  response.status(statusCode).json({
    status,
    data,
    message,
    errorMessage,
  })
}

export { generateAPIResponse }

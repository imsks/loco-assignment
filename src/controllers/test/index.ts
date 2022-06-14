import { Request, Response } from 'express'
import { UpdateTransactionByIDBody, UpdateTransactionByIDPayload } from 'interfaces'
import { generateAPIResponse } from 'utils'

class Transaction {
  transactions: UpdateTransactionByIDPayload[]

  constructor() {
    this.transactions = []
  }

  updateTransactionByID = async (request: Request, response: Response) => {
    const { amount, type, parentId } = request.body as UpdateTransactionByIDBody
    const { transactionId } = request.params

    // Check if payload is valid
    if (!amount || !type) {
      return generateAPIResponse({ response, status: false, statusCode: 400, message: 'Invalid payload' })
    }

    // Create payload
    const payload: UpdateTransactionByIDPayload = {
      transactionId,
      amount,
      type,
      parentId,
    }

    // Check if transaction ID exists in transactions
    const transactionIndex = this.transactions.map((transaction) => transaction.transactionId).indexOf(transactionId)

    // If transaction ID exist
    if (transactionIndex !== -1) {
      // Update transaction ID
      this.transactions[transactionIndex] = payload
    } else {
      // Push payload to transactions
      this.transactions.push(payload)
    }

    return generateAPIResponse({ response, status: true, statusCode: 200, message: 'Transaction Updated Successful' })
  }

  getTransactionByID = async (request: Request, response: Response) => {
    return generateAPIResponse({
      response,
      status: true,
      data: this.transactions,
      statusCode: 200,
    })
  }
}

export default Transaction

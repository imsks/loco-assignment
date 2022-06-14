import { Request, Response } from 'express'
import { UpdateTransactionByIDBody, UpdateTransactionByIDPayload } from 'interfaces'
import { generateAPIResponse } from 'utils'

class Transaction {
  transactions: UpdateTransactionByIDPayload[]

  constructor() {
    this.transactions = []
  }

  // 1. Update the transaction by ID
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

  // 2. Get the transaction by ID
  getTransactionByID = async (request: Request, response: Response) => {
    return generateAPIResponse({
      response,
      status: true,
      data: this.transactions,
      statusCode: 200,
    })
  }

  // 3. Get all types of transactions
  getAllTypesFromTransactions = async (request: Request, response: Response) => {
    const types = this.transactions.map((transaction) => transaction.type)

    return generateAPIResponse({
      response,
      status: true,
      data: types,
      statusCode: 200,
    })
  }
}

export default Transaction

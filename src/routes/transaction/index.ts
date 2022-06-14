import { Router } from 'express'
// import { updateTransactionByID, getTransactionByID } from 'controllers'
import { Transaction } from 'controllers'

const transaction = new Transaction()

const router = Router()

// All Transaction Routes
router.route('/:transactionId').put(transaction.updateTransactionByID)
router.route('/').get(transaction.getTransactionByID)

export default router

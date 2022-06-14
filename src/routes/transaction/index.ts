import { Router } from 'express'
import { Transaction } from 'controllers'

const transaction = new Transaction()

const router = Router()

// All Transaction Routes
router.route('/transaction/:transactionId').put(transaction.updateTransactionByID)
router.route('/transaction').get(transaction.getTransactionByID)
router.route('/types').get(transaction.getAllTypesFromTransactions)
router.route('/types/:type').get(transaction.getTypeFromTransactions)

export default router

import express from 'express'
import cors from 'cors'
import { transactionRouter } from 'routes'

const app = express()

// Global Middlewares
app.use(cors())
app.use(express.json({ limit: '1mb' }))

// Routes
app.use('/api/v1/transactionservice/transaction', transactionRouter)
// app.use('/api/v1/transactionservice/types', transactionRouter)

export default app

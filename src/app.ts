import express from 'express'
import cors from 'cors'
import { testRouter } from 'routes'

const app = express()

// Global Middlewares
app.use(cors())
app.use(express.json({ limit: '1mb' }))

// Routes
app.use('/api/v1/test', testRouter)

export default app

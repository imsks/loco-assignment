import { Router } from 'express'
import { testingRouter } from 'controllers'

const router = Router()

// All Puja Routes
router.route('/').get(testingRouter)

export default router

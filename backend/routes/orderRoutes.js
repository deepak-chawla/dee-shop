import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.route('/order').post(protect, addOrderItems)

export default router

import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById } from '../controllers/orderControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.route('/order').post(protect, addOrderItems)
router.route('/order/:id').get(protect, getOrderById)

export default router

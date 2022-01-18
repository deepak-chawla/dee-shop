import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.route('/order').post(protect, addOrderItems)
router.route('/orders/myorders').get(protect, getMyOrders)
router.route('/order/:id').get(protect, getOrderById)
router.route('/order/:id/pay').put(protect, updateOrderToPaid)

export default router

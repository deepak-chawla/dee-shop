import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderControllers.js'
import { admin, protect } from '../middlewares/authMiddlewares.js'

router
  .route('/order')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders)
router.route('/orders/myorders').get(protect, getMyOrders)
router.route('/order/:id').get(protect, getOrderById)
router.route('/order/:id/pay').put(protect, updateOrderToPaid)
router.route('/order/:id/delivered').put(protect, admin, updateOrderToDelivered)

export default router

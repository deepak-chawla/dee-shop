import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.route('/order').post(protect, addOrderItems)
router.route('/order/:id').get(protect, getOrderById)
router.route('/order/:id/pay').put(protect, updateOrderToPaid)

export default router

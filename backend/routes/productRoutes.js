import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
} from '../controllers/productControllers.js'

router.get('/products', getProducts)
router.get('/product/:id', getProductById)

export default router

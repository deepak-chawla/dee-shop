import express from 'express'
const router = express.Router()
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productControllers.js'
import { admin, protect } from '../middlewares/authMiddlewares.js'

router.get('/products', getProducts)
router.route('/product').post(protect, admin, createProduct)
router
  .route('/product/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct)

export default router

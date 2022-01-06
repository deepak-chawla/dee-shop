import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'

router.get(
  '/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  '/product/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
  })
)

export default router

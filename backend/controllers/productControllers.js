import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

export { getProducts, getProductById }

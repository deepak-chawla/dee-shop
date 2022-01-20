import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  name: { type: String },
  rating: { type: Number },
  comment: { type: String },
  user: {
    type: String,
    required: true,
  },
})

const productSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: [reviewSchema],
  numReviews: {
    type: Number,
    default: 0,
  },
})

const Product = mongoose.model('Product', productSchema)
export default Product

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import { errorHandler, notFound } from './middlewares/index.js'
const app = express()
dotenv.config()
connectDB()

app.use(cors())

app.use('/api', productRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(2000, () => {
  console.log('Server is running on port 2000')
})

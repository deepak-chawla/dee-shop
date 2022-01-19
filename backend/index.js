import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(cors())
app.use(express.json())
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use('/api/upload', uploadRouter)
app.use('/api', orderRouter)
app.use('/api', productRouter)
app.use('/api/user', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(2000, () => {
  console.log('Server is running on port 2000')
})

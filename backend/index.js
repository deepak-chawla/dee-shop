import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'

const app = express()
dotenv.config()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/upload', uploadRouter)
app.use('/api', orderRouter)
app.use('/api', productRouter)
app.use('/api/user', userRouter)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (res, req) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode in port ${PORT}`
  )
})

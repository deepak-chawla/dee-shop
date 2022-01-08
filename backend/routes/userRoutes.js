import express from 'express'
const router = express.Router()
import {
  getUserProfile,
  login,
  register,
} from '../controllers/userControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.post('/register', register)
router.post('/login', login)
router.get('/profile', protect, getUserProfile)

export default router

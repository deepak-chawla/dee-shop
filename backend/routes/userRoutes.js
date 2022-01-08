import express from 'express'
const router = express.Router()
import {
  getUserProfile,
  login,
  register,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

router.post('/register', register)
router.post('/login', login)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router

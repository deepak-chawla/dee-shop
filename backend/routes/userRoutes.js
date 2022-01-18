import express from 'express'
const router = express.Router()
import {
  deleteUser,
  getUserProfile,
  getUsers,
  login,
  register,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { admin, protect } from '../middlewares/authMiddlewares.js'

router.route('/').get(protect, admin, getUsers)
router.route('/:id').delete(protect, admin, deleteUser)
router.post('/register', register)
router.post('/login', login)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router

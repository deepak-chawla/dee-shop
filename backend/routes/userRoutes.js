import express from 'express'
const router = express.Router()
import {
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  login,
  register,
  updateUser,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { admin, protect } from '../middlewares/authMiddlewares.js'

router.route('/').get(protect, admin, getUsers)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser)
  .get(protect, admin, getUserById)
router.post('/register', register)
router.post('/login', login)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router

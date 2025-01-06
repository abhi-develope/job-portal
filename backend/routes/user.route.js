import express from 'express'
import { login, logout, profileUpdate, signup } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import { multipleUploads } from '../middleware/multer.js';
const router = express.Router();

router.post('/signup',multipleUploads, signup)
router.post('/login', login)
router.get('/logout', logout)
router.post('/profile/update',isAuthenticated,multipleUploads, profileUpdate)


export default router;
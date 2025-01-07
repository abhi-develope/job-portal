import express from 'express'
import { login, logout, profileUpdate, signup } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import {  upload } from '../middleware/multer.js';
const router = express.Router();

router.post('/signup',upload, signup)
router.post('/login', login)
router.get('/logout', logout)
router.post('/profile/update',isAuthenticated,upload, profileUpdate)


export default router;
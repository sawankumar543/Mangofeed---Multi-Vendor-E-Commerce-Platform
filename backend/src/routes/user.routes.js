import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserProfile, logout } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/profile', protectRoute, getUserProfile);
userRouter.post('/logout', logout)

export default userRouter
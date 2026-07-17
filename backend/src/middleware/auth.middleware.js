import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../config/config.js';

export const protectRoute = async (req, res, next) => {
    try {
        // 1. Cookie se tokne nikale
        const token = req.cookies.jwt_token;
        if(!token) {
            return res.status(401).json({ success: false, message: 'not authorized, no token'})
        }

        // 2. Token verify karein
        const decoded = jwt.verify(token, config.JWT_SECRET);

        console.log(decoded.id)
         // 3. User ka data DB se nikal kar request object me daal dein (password chhod kar)
        req.user = await User.findById(decoded.id).select('-password')
        next();
    } catch(error) {
        return res.status(401).json({ success: false, message: 'Not authorized, token failed'})
    }
}
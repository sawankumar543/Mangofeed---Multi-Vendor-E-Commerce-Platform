import User from "../models/auth.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../config/config.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const saltRounds = 10;

        // 1. Validation: Check kar rha hun sabhi fileds aayi hai ya nhi
        if(!name || !email|| !password){
            return res.status(400).json({ success: false, message: 'Please add all fields'})
        }   

        // 2. Check kar rha hun ki user phle se exists karta hai ya nhi
        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.status(400).json({ success: false, message: "User already exists"})
        }
        // Hash password create karein
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt)
        
        // 3. Naya user create kar rha hun
        const user = await User.create({
            name,
            email,
            password: hash,
        });
        
        // JWT Token generate karein (user id se)
        const token = jwt.sign({id: user._id.toString() }, config.JWT_SECRET, {
            expiresIn:'7d'
        })
        if(user) {
            // 4. Succes Response (Security ke liye password return nhi karnge)
            res.cookie('jwt_token', token, {
                httpOnly: true,
                secure: config.NODE_ENV?.trim().toLowerCase() === 'production',
                sameSite: 'strict',
                maxAge: 7*24*60*60*1000,
            }).status(201).json({
                success: true,
                message: "User registerd successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                },
            })
        } else {
            res.status(400).status( {
                success: true,
                message: "Invalid user data"
            })
        }

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check kar rha hun ki
    } catch(error) {
        console.log(error.message);
    }
}
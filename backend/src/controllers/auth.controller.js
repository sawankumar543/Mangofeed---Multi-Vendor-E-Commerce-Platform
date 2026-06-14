import User from "../models/auth.model.js";
import bcrypt from 'bcryptjs';
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

        // 1. Validation: Check karein ki email aur password aaya hai ki nhi
        if(!email || !password) {
            return res.status(400).json({ message: "Please add email and password!"})
        }
        // 2. User ko email se dhundhna
        const user = await User.findOne({ email});
        
          // 🚨 PEHLE CHECK KAREIN: Agar user nahi mila, toh turant invalid return kar dein
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
         // JWT Token generate karein (user id se)
        const token = jwt.sign({id: user._id.toString() }, config.JWT_SECRET, {
            expiresIn:'7d'
        })
        // 3. Agr user mil gya aur password match ho gya
        if(user && (await bcrypt.compare(password, user.password))) {
            return res.status(200).cookie('jwt_token', token, {
                httpOnly: true,
                secure: config.NODE_ENV?.trim().toLowerCase() === 'production',
                sameSite: 'strict',
                maxAge: 7*24*60*60*1000,
            }).json({
                success: true,
                message: 'Login successful! Welcome back 😀',
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email, 
                },
            })
        } else {
             // Security reason ke liye hum exact nahi batate ki password galat hai ya email    
            return res.status(401).json({ message: 'Invalid email and password'})
        }
    } catch(error) {
        return res.status(500).json({ message: error.message});
    }
}
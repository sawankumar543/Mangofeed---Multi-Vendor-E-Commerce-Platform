import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

import { ROLES } from "../constants/roles.js";
import { USER_STATUS } from "../constants/user-status.js";
import { required, trim } from "zod/mini";
import config from "../config/config.js";

// Define Schema
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: 3,
            maxlength: 50,
        },
        username: {
            type: String,
            required: [true, "UserName is required"],
            trim: true,
            unique: true,
            lowercase: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            unique: [true, "Email is required"],
            trim: true,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
        },
        avatar: {
            type: String,
            default: null,
            trim: true,
        },
        coverImage: {
            type: String,
            default: null,
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
            default: "",
            maxlength: 500, 
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        emailVerificationToken: {
            type: String,
            default: null,
        },
        emailVerificationExpires: {
            type: Date,
            default: null,
        },
        refreshToken: {
            type: String,
            default: null,
            select: false,
        },
        lastLogin: {
            type: Date,
            default: null,
        },
        passwordChangedAt: {
            type: Date,
            default: null,
        },
        roles: {
            type: [String],
            enum: Object.values(ROLES),
            default: [ROLES.USER]
        },
        status: {
            type: String,
            enum: Object.values(USER_STATUS),
            default: USER_STATUS.ACTIVE,
        },
    },
    {
        timestamps: true
    }
);  

const saltRounds = Number(config.BCRYPT_SALT_ROUNDS || 12);

userSchema.pre("save", async function(next) {
    if (!this.isModified("password"))  return next();
    this.password = await bcrypt.hash(this.password, saltRounds);
    next()
});


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function() {
    return jwt.sign({
        id: this._id,
        roles: this.roles,
        status: this.status,
    }, 
    config.JWT_ACCESS_SECRET, {
        expiresIn: config.ACCESS_TOKEN_EXPIRES_IN
    });
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({
        id: this._id
    }, config.JWT_REFRESH_SECRET, {
        expiresIn: config.REFRESH_TOKEN_EXPIRES_IN,
    })
}
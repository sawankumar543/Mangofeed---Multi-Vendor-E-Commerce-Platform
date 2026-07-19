import { generateEmailVerificationToken } from "../lib/token.js";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import mailService from "./mail.service.js";


class AuthService {
    async registerUser(userData) {
        await this.ensureUniqueUser(userData);
        const user = await this.createUser(userData);
        const token = this.attachEmailVerificationToken(user);
        await user.save();
        try {
            await mailService.sendVerificationEmail(user, token);
        } catch (error) {
            console.error(error)
        }
        return user._id;
    }

    // Methods that help registerUser
    async ensureUniqueUser(userData) {
        const { email, username } = userData;
        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { username: username },
            ]
        });
        if(existingUser) {
            if(existingUser.email === userData.email) {
                throw new ApiError(409, "Email already exists");
            }
            if(existingUser.username === userData.username) {
                throw new ApiError(409, "Username already exists")
            }
        }
    }
    async createUser(userData) {
      return new User(userData);
    }
    attachEmailVerificationToken(user) {
        const token = generateEmailVerificationToken();
        user.emailVerificationToken = token;
        user.emailVerificationExpires = new Date(Date.now() + 15 * 60 * 1000)
        return token
    }
    // Methods that help registerUser Ends Here

    // Verify Email Method
    async verifyEmail(token) {
        if(!token) {
            throw new ApiError(400, "Token not found")
        }
        const user = await User.findOne({
            emailVerificationToken: token,
        });
        if(!user) {
            throw new ApiError(404, "Invalid verification token");
        }
        if(user.isEmailVerified) {
            throw new ApiError(409, "Email already verified")
        }
        if(user.emailVerificationExpires < Date.now()) {
            return new ApiError(400, "Verification token has expired")
        }
        user.isEmailVerified = true;
        user.emailVerificationToken = null;
        user.emailVerificationExpires = null;

        await user.save();
        return user;
    }

    async resendVerificationEmail(email) {
        const user = await User.findOne({ email });
        if(!user) {
            throw new ApiError(404, "User not found")
        }
        if(user.isEmailVerified) {
            throw new ApiError(409, "Email is already verified")
        }
        const token = this.attachEmailVerificationToken(user);
        await user.save()
        try {
            await mailService.sendVerificationEmail(user, token)
        } catch (error) {
            console.error("Failed to send verification email:", error);
        }
        return user;
    }

    async loginUser(loginData) {
        // Extract identifier and password
        const { identifier, password } = loginData;
        // find user
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { username: identifier }
            ]
        })
        // if user not found
        if(!user) {
            throw new ApiError(401, "Invalid credentials")
        }
        const isPasswordValid = await user.isPasswordCorrect(password);
        // If password is not valid
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid credentials")
        }
        // is email Verified
        if(!user.isEmailVerified) {
            throw new ApiError(403, "Please verify your email first.")
        }
        const { accessToken, refreshToken  } = await this.generateAuthTokens(user);

        return {
            accessToken,
            refreshToken, 
            user
        }
    }
    async generateAuthTokens(user) {
        // generate access token
        const accessToken = await user.generateAccessToken();
        // generate refresh token
        const refreshToken = await user.generateRefreshToken();

        // save token to db
        user.refreshToken = refreshToken;
        
        await user.save();
        return {
            accessToken, 
            refreshToken
        }
    }
    
}

export default new AuthService();
import { superRefine } from "zod";
import authService from "../services/auth.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
}

class AuthController {
    register = asyncHandler(async (req, res) => {
        const result = await authService.registerUser(req.body);
        return res.status(201).json(
            new ApiResponse(
                201,
                "User registered successfully",
                result,
            )
        )
    });
    verifyEmail = asyncHandler(async (req, res) => {
        const { token } = req.query;
        const user = await authService.verifyEmail(token);
        return res.status(200).json(
            new ApiResponse(200, "Email has been verified successfully", user)
        )
    });

    resendVerificationEmail = asyncHandler(async (req, res) => {
        const { email } = req.body;
        const user =  await authService.resendVerificationEmail(email);
        return res.status(200).json(
            new ApiResponse(200, "Email has been verified successfully", user)
        )
    })
    login = asyncHandler(async (req, res) => {
        const { user, refreshToken, accessToken } =  await loginUser(req.body);
        res.cookie("accessToken", accessToken)
        res.cookie("refreshToken", refreshToken)

        return res.status(200).json(
            new ApiResponse(200, "Login successful", user)
        )
    })
}

export default new AuthController
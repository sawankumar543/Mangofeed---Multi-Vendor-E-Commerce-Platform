import authService from "../services/auth.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

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
}

export default new AuthController
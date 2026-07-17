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
}

export default new AuthController
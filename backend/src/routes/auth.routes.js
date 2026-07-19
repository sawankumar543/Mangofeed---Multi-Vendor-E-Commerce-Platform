import { Router } from "express";
import { loginSchema, registerSchema, resendVerificationEmailSchema } from "../validators/auth.validator.js";
import validate from "../middleware/validate.middleware.js";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", validate(registerSchema), authController.register);
authRouter.get('/verify-email', authController.verifyEmail);
authRouter.post("/resend-verification-email", validate(resendVerificationEmailSchema), authController.resendVerificationEmail);
authController.post("/login", validate(loginSchema), authController.login);

export default authRouter;
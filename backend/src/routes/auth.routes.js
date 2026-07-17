import { Router } from "express";
import { registerSchema } from "../validators/auth.validator.js";
import validate from "../middleware/validate.middleware.js";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/register", validate(registerSchema), authController.register);

export default authRouter;
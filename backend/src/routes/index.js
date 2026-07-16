import express from "express"
import healthRoutes from "./health.route.js";


const router = express.Router();

// Routes
router.use("/health", healthRoutes);

export default router;
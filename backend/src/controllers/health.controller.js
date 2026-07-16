import config from "../config/config.js";
import ApiResponse from "../utils/ApiResponse.js";

const getHealthStatus = async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, "Server is healthy", {
            uptime: process.uptime(),
            environment: config.NODE_ENV,
            timestamps: new Date()
        })
    )
}

export default getHealthStatus;
export const getUserProfile = async (req, res) => {
    try {
        // req.user hume middleware se mil jayega
        return res.status(200).json({ success: true, user: req.user });
    } catch(error) {
        return res.status(500).json({ success: false, message: error.message})
    }
}

export const logout = (req, res) => {
    res.clearCookie("jwt_token");
    res.status(200).json({
        success: true,
        message: "Logged out successfully!"
    })
}
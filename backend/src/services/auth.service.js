import { generateEmailVerificationToken } from "../lib/token.js";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

class authService {
    async registerUser(userData) {
        await this.ensureUniqueUser(userData);
        const user = await this.createUser(userData);
        this.attachEmailVerificationToken(user);
        await user.save();
        return user;
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
        user.emailVerificationToken = generateEmailVerificationToken();
        user.emailVerificationExpires = new Date(Date.now() + 15 * 60 * 1000)
    }
}

export default new authService();
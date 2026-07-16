import mongoose from 'mongoose'
import config from '../config/config.js';

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.DB_URL);
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
        process.exit(1); // Node.js Process ko terminate karti hai.
    }   
}

export default connectDatabase
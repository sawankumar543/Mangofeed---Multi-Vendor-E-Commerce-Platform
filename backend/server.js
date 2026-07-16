import 'dotenv/config'; // Sabse upar hona chahiye
config()

import app from './src/app.js';
import config from './src/config/config.js';
import connectDatabase from './src/database/connection.js';

// Port
const PORT = config.PORT || 5000;

// Run the Server
const startServer =  async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    } catch (error) {
        console.error(error)
    }
}
startServer();
import 'dotenv/config'; // Sabse upar hona chahiye


if(!process.env.PORT) {
    console.log("Config file me hi PORT nhi aarha ahi")
}
const config = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_URL: process.env.MONGODB_URI,
    CLIENT_URL: process.env.CLIENT_URL,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
}

export default config
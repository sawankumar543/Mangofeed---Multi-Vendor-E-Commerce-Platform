import 'dotenv/config'; // Sabse upar hona chahiye


if(!process.env.PORT) {
    console.log("Config file me hi PORT nhi aarh ahi")
}
const config = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
}

export default config
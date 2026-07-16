import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import dns from 'node:dns/promises';
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import config from "../src/config/config.js"
import routes from "./routes/index.js";
import errorHandler from "./middleware/error.middleware.js";
import ApiError from "./utils/ApiError.js";


// configure custom DNS server globally for resolve operations
dns.setServers(['1.1.1.1', '8.8.8.8'])

// Make application
const app = express()

// middlewares
app.use(express.json());
app.use(cookieParser()); // JWT cookies ko read karne ke liye.
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true})); // Ye HTML forms ke data ko parse karta hai.

app.use((err, req, res, next) => {
  if(err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: "Glat Json format hai! Please valid Json Bheje"
    })
  }
})

app.use("/api/v1", routes);
app.use((req, res, next) => {
  new ApiError(404, "Route Not Found")
});
app.use(errorHandler);

// Print current mode
console.log("Current NODE_ENV is:", process.env.NODE_ENV);

// Modern tarika se __dirname define karna
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- FRONTEND SERVE KARNE KA CODE (PRODUCTION KE LIYE) ----
const isProduction = process.env.NODE_ENV && process.env.NODE_ENV.trim().toLowerCase() === 'production';
if (isProduction) {
  
  // 1. Frontend ke 'dist' folder ko static folder banana
  // Frontend ke 'dist' folder ka path
  const distpath = path.join(__dirname, '..','..','frontend', 'dist')

  // Kyuki backend folder alag hai, hum '../frontend/dist' tak path join karenge
  app.use(express.static(distpath));

  // 2. Catch-all route: Kisi bhi aise route par jo API nahi hai, index.html bhejein
  app.get('{*any}', (req, res) => {
    res.sendFile(path.resolve(distpath, 'index.html'));
  });
} else {
  // Development mode me basic message
  app.get('/', (req, res) => {
    res.send('API is running in development mode...');
  });
}

export default app;
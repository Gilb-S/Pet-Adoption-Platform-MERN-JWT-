import express from 'express'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const app = express();
app.use(helmet())
// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL, 
    credentials: true
}));
app.use(morgan("dev"))
app.use(cookieParser())
app.use(rateLimit({
    windowMs: 60_000,
    max: 100
}))
// routes
export default app
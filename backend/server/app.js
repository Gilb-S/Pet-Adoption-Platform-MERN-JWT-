import express, { request } from 'express'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import authRoutes from '../routes/auth.Route.js'
import petRoutes from '../routes/pet.Route.js'
import requestRoutes from '../routes/request.routes.js'
import {notFound,  errorHandler } from '../middleware/error.js'
const app = express();
app.use(helmet())
// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL, 
    credentials: true
}));
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(rateLimit({
    windowMs: 60_000,
    max: 100
}))
// routes
app.use("/api/auth", authRoutes)
app.use('/api/pets', petRoutes)
app.use('/api/request', requestRoutes)
app.use('/api/users', (re, res) =>{})


// not found routes
app.use(notFound)
app.use(errorHandler)
export default app
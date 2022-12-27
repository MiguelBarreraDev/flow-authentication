import userRouter from '#routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

const expressApp = express()

// Middlewares
expressApp.use(cookieParser())
expressApp.use(morgan('tiny'))
expressApp.use(express.json())
expressApp.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
)

// Routes
expressApp.use('/users', userRouter)

export default expressApp

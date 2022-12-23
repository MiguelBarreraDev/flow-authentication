import userRouter from '#routes/user.routes.js'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

const expressApp = express()

// Middlewares
expressApp.use(morgan('tiny'))
expressApp.use(express.json())
expressApp.use(
  cors({
    origin: process.env.CLIENT_URL
  })
)

// Routes
expressApp.use('/users', userRouter)

export default expressApp

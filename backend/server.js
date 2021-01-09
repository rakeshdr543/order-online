import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app= express()
app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`server is running in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold))
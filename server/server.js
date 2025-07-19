import './config/instrument.js';
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerckWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'

// Initialize Express
const app = express()

//connect to db
await connectDB()
await connectCloudinary()

// Middleware
app.use(cors())
app.use(express.json())  // ✅ this must be invoked
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/webhooks',clerckWebhooks)
app.use('/api/company', companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)

// Port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) // ✅ backticks
})

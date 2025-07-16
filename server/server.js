import './config/instrument.js';
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerckWebhooks } from './controllers/webhooks.js';

// Initialize Express
const app = express()

//connect to db
await connectDB()

// Middleware
app.use(cors())
app.use(express.json())  // ✅ this must be invoked

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/webhooks',clerckWebhooks)
// Port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) // ✅ backticks
})

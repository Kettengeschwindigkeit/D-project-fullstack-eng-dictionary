import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import authRoute from "./routes/auth.js"
import categoryRoute from "./routes/categories.js"
import subCategoryRoute from "./routes/subCategories.js"
import itemsRoute from "./routes/items.js"

const app = express()
dotenv.config()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/subCategories', subCategoryRoute)
app.use('/api/items', itemsRoute)

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/eng-dictionary')
        app.listen(5000, () => console.log('Server has been started...'))
    } catch (error) {
        console.log(error)
    }
}

start()

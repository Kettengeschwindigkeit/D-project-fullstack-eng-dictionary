import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import authRoute from "./routes/auth.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoute)

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/eng-dictionary')
        app.listen(5000, () => console.log('Server has been started...'))
    } catch (error) {
        console.log(error)
    }
}

start()

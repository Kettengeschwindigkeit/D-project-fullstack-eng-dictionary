const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Everything is ok!'})
})

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Kettengeschwindigkeit:1488@cluster0.wvgxwjm.mongodb.net/eng-dictionary?retryWrites=true&w=majority')
        app.listen(5000, () => console.log('Server has been started...'))
    } catch (error) {
        console.log(error)
    }
}

start()

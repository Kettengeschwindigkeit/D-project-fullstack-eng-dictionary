const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const data = JSON.stringify([
    {
        id: "w1u",
        title: "universal",
        content: [
            { id: 1, term: "accidentally", translate: "случайно" },
            { id: 2, term: "although", translate: "несмотря ни на что, к тому же" },
            { id: 3, term: "eventually", translate: "в итоге" },
            { id: 4, term: "precisely", translate: "именно, точно, совершенно верно" },
            { id: 5, term: "rather", translate: "скорее, вернее, пожалуй, лучше" }
        ],
    },
    {
        id: 1,
        title: "booze",
        content: [
            { id: 1, term: "booze", translate: "выпивка" },
            { id: 2, term: "hangover", translate: "похмелье" },
            { id: 3, term: "over-served", translate: "too much alcohol..." },
            { id: 4, term: "tallboy", translate: "a 24 oz can of beer" },
        ],
    },
    {
        id: 2,
        title: "drugs",
        content: [
            { id: 1, term: "batch", translate: "партия" },
            { id: 2, term: "bud", translate: "марихуана" },
            { id: 3, term: "dope", translate: "дурман, кайф" },
            { id: 4, term: "fix", translate: "доза, поправить здоровье" },
            { id: 5, term: "pipe", translate: "трубка для курения марихуаны" },
            { id: 6, term: "stash", translate: "заначка" },
            { id: 7, term: "weed", translate: "трава" },
        ],
    },
    {
        id: 3,
        title: "money",
        content: [
            { id: 1, term: "Big One", translate: "1000$" },
            { id: 2, term: "G's", translate: "1000$" },
        ],
    },
])

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.get('/', (req, res) => {
    res.send(data)
})

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/eng-dictionary')
        app.listen(5000, () => console.log('Server has been started...'))
    } catch (error) {
        console.log(error)
    }
}

start()

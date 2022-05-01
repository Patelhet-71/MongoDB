const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://het-patel:het123@stigeintern.2ak2l.mongodb.net/stige-project?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())


const textRouter = require('./routes/texts')
app.use('/texts', textRouter)

app.listen(3000, () => {
    console.log('Server started')
})
const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')

app.use(cors())


app.listen(4000, () => {
    console.log('app is listening to port 4000')
})


db.connection
.once('open', () => console.log('connected to db'))
.on('error', (e) => console.log('error', e))

// console.log('hello world')


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/', require('./routes/root'))
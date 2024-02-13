require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const animesRouter = require('./routes/animes_router')
const session = require('express-session')


app.use(express.static('animelic'))
app.use(express.json())


app.use('/api/animes', animesRouter)
app.use(session({secret: process.env.SESSION_SECRET || "mistyrose", resave: false, saveUninitialized: true}))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
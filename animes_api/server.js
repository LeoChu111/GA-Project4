require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const animesRouter = require('./routes/animes_router')


app.use(express.static('client'))
app.use(express.json())


app.use('/api/animes', animesRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
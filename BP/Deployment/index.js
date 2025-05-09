require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get('/namaste', (req, res) => {
    res.send('namaste')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at the website</h1>')
})
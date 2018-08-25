const express = require('express')
const bodyparser = require('body-parser')
const crtl = require('./controller')
const app = express()
app.use(bodyparser.json())












const PORT = 4545
app.listen(PORT, () => console.log(`You are listening to ${PORT} Radio.`))
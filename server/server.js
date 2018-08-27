const express = require('express')
const bodyparser = require('body-parser')
const ctrl = require('./controller')
const app = express()
app.use(bodyparser.json())

app.get('/api/pokeplants', ctrl.read)
app.put('/api/pokeplants', ctrl.update)
app.post('/api/pokeplants', ctrl.create)





const PORT = 4545
app.listen(PORT, () => console.log(`You are listening to ${PORT}_FM Radio.`))
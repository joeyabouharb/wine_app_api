import express from 'express'
import mongoose from 'mongoose'
import Colours from './src/models/Colours'
import Varietals from './src/models/Varietals'
import {
  config
} from './.config'

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect(config.connectionString)
const db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('open', () => {
  console.log('Connected to Database')
})

const app = express()
app.use(express.json())

app.get('/api/wineProfiles/getAll', (req, res) => {
  Colours.find({}, '-_id')
    .populate('common', '-_id')
    .exec((err, data) => {
      if (err) throw err
      res.json(data)
    })
})

app.listen(config.port, () => {
  console.log(`listening on: ${config.host}/${config.port}`)
})

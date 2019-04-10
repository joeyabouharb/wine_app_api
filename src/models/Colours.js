import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ColourSchema = new Schema({
  colour: {
    type: String,
    required: true,
    unique: true
  },
  common: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'varietals'
    }],
    required: true
  }
})

const Colours = mongoose.model('colours', ColourSchema)
module.exports = Colours

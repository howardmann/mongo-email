let mongoose = require('../db/connection.js')

let Schema = mongoose.Schema
let EmailSchema = new Schema({
  email: String,
  date: {type: Date, default: Date.now},
  country: String,
  seats: Number,
  campaign: String
})

let Email = mongoose.model('Email', EmailSchema)

module.exports = Email;
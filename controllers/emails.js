let emails = module.exports = {}

// Require Model
let Email = require('../model/email')

emails.index = (req, res, next) => {
  // Fetch emails
  Email.find({})
    .then(resp => {
      res.send(resp)
    }).catch(next)
}

emails.show = (req, res, next) => {
  let id = req.params.id
  // Fetch single email
  Email.findById(id)
    .then(resp => {
      res.send(resp)
    }).catch(next)
}

// Find By prop
emails.campaign = (req, res, next) => {
  let id = req.params.id
  Email.find({campaign: id})
    .then(resp => {
      res.send(resp)
    }).catch(next)
}

// Create
emails.create = (req, res, next) => {
  let {email, country, seats, date, campaign } = req.body
  Email.create({email, country, seats, date, campaign})
    .then(resp => {
      res.send(resp)
    })
    .catch(next)
}

// Update
emails.update = (req, res, next) => {
  let id = req.params.id
  let body = req.body

  Email.findByIdAndUpdate(id, body, {new: true})
    .then(data => res.send(data))
    .catch(next)
}

// Delete
emails.delete = (req, res, next) => {
  let id = req.params.id
  Email.findByIdAndRemove(id)
    .then(data => res.send(data))
    .catch(next)
}

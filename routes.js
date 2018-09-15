let express = require('express')
let router = express.Router()
let emails = require('./controllers/emails')

router.get('/', (req, res, next) => {
  res.send('hello world')
})

// CRUD Operation
router.get('/emails', emails.index)
router.get('/emails/campaign/:id', emails.campaign)
router.get('/emails/:id', emails.show)
router.put('/emails/:id', emails.update)
router.post('/emails', emails.create)
router.delete('/emails/:id', emails.delete)

module.exports = router
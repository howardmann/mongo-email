let express = require('express')
let bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json())

app.use(require('./routes.js'))

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})
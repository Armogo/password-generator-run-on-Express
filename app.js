// include necessary packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// set view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set body-parser
app.use(express.urlencoded({extended: true}))

// routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', {password: password})
})

// listen Express running on Node
app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}`)
})
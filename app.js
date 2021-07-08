// include necessary packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// routing
app.get('/', (req, res) => {
  res.render('index', {})
})

// listen Express running on Node
app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}`)
})
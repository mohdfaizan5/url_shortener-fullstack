const express = require('express') // Importing express
const app = express()

const urlRoute = require('./routes/urlRoute')
const bodyParser = require('body-parser')
const mongoose = require("mongoose") // mongoose to connect with mongoDB atlas
const URLModel = require('./models/url')

// ENV variables
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL


// Setting up ejs template engine
app.set('view engine', 'ejs')

// Setting up static files
app.use(express.static('./public'))

// body parser
app.use(bodyParser.json())


// 🔥🔥🔥
app.use('/', urlRoute)

app.get('/redirect', (req, res) => {
  // Redirect to an external link
  res.redirect('/test');
});


app.get('/test', (req, res) => {
  // Redirect to an external link
  res.send('hiasdf');
});


// Connecting with DB
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log("ServerUp and DB connected!!!"))
  })
  .catch(error => {
    console.log(error)
  })

# URL shortner


Design a URL shortner that takes in a valid URL and returns a shortned URL, 

Features:

* Taking a valid URL
* giving back a `shortend` URL
* Redirecting the user to the previous provided URL
* Keeping a track of total visits/clicks on the URL


## Routes:

GET/ -> Home page
POST/createUrl -> Generate a new shortned URL with send json
GET/:id -> Redired the user to original URL




## Colors


- Yellow - #E7FE55
- text - black
- bg1 - #dddddd
- bg2 - #979aa1


# Inspiration

UI - https://www.shorturl.at/
Colors - https://dribbble.com/shots/22808294-Oracle-Payroll-Salary-Management-App







<!-- 
// backend main:

// Importing express
import express from "express"
const app = express()

// setting up ejs
import ejs from "ejs"

// Setting up ejs template engine
app.set('view engine', 'ejs')

// Setting up static files
app.use(express.static('./public'))

// Home page rendering
app.get('/', (req, res)=>{
  res.render("index")
})

// Post req, url shortening
app.post('/', (req, res, next)=>{
  console.log(req.body)
  res.send(req.body)
  // next()
  
})


app.listen(3000)

 -->
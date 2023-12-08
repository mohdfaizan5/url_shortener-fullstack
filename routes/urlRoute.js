const express = require('express')
const route = express.Router()

const { getHome, handleURLShortning, redirectUrl } = require('../controller/urlController')


// S1: Landing page route
route.get('/', getHome)

// S3: Redirect short_url to actual_url
route.get("/:shorturl", redirectUrl)

// S2: Post route to create urls
route.post('/createUrl', handleURLShortning)




// route.get("/re", (req, res) => {
//   res.location('http://example.com')
// })

module.exports = route


/* 
Home page

API's
- Create a short url
  POST `\` with input body
  INPUT - url
  - Output - Short url

- Redirecting short url to actual urls
  - GET `\:shorturl`
*/
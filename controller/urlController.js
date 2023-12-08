// const shortid = require('shortid');
const generateUniqueId = require('generate-unique-id');


const urlModel = require('../models/url')

// Landing page route
const getHome = (req, res) => {
  res.render("index")
}


const handleURLShortning = async (req, res) => {

  try {
    const { url } = req.body
    const regex = /^(https?:\/\/)?(www\.)?([^\s]+)\/?$/;
    const protocalUrl = url.match(regex)[3]
    console.log(protocalUrl)
    const urlShortId = generateUniqueId({
      length: 4,
    });

    const createdURL = await urlModel.create({
      shortId: urlShortId,
      redirectURL: `https://${protocalUrl}`
    })

    console.log(`${url} and Short id is bit.ly/${urlShortId}`)
    res.json({
      url: `http://localhost:5000/${urlShortId}`,
      message: "Succesfully created"
    })

  }
  catch (error) {
    res.status(401).send("couldn't create")
  }
}

const redirectUrl = async (req, res) => {
  const { shorturl } = req.params
  const foundURL = await urlModel.findOne(
    {
      shortId: shorturl
    }
  )
  if (foundURL) {
    console.log(foundURL.redirectURL)
    console.log(foundURL)
    res.redirect(301, foundURL.redirectURL)
  }
  else {

    res.status(301).redirect('/')
  }
}


module.exports = { getHome, handleURLShortning, redirectUrl }
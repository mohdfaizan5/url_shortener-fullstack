const mongoose = require('mongoose')

const urlModel = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  redirectURL: {
    type: String,
    required: true
  },
  // visitHistory: [{timestamp: Number}]
},
  {
    timestamps: true
  }
)

const URLSchema = mongoose.model('url', urlModel)

module.exports = URLSchema
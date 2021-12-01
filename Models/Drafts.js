const mongoose = require('mongoose')

const Drafts = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  prevImage: String,
  posttags:String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Draft = mongoose.model('Draft', Drafts)

module.exports = Draft
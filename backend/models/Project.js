var mongoose = require('mongoose')

var Player = new mongoose.Schema({
    title: String,
    description: String,
    votes: Number,
    submittedBy: String,
    submittedEmail: String
})

module.exports = mongoose.model('Project', Project);
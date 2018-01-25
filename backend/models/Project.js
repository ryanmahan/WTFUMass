var mongoose = require('mongoose')

var Project = new mongoose.Schema({
    title: String,
    description: String,
    votes: Number,
    submittedBy: String,
    submittedEmail: String
})

module.exports = mongoose.model('Project', Project);
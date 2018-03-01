var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = require('../models/User.js');

var Project = new mongoose.Schema({
    title: String,
    description: String,
    votes: Number,
    dateCreated: String,
    submittedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    votedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
    tag: String,
    reply: String,
    status: String,
})

module.exports = mongoose.model('Project', Project);
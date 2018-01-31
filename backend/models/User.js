var mongoose = require('mongoose')
var Schema = mongoos.Schema

var User = new mongoose.Schema({
    isAdmin: Boolean,
    username: String,
    fname: String,
    lname: String,
    password: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('User', User);
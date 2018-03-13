var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = new mongoose.Schema({
    sub: String,
    isAdmin: Boolean,
    fname: String,
    email: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('User', User);
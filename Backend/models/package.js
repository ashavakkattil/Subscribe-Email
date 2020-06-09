var mongoose = require('mongoose')

var PackageSchema = mongoose.Schema({
    name: String,
    description: String,
    themes: [],
    companyId: String
})

module.exports = mongoose.model('Package', PackageSchema)
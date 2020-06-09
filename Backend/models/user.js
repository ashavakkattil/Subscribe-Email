var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    companyId: String
});

module.exports = mongoose.model('User', UserSchema);

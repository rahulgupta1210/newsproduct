var mongoose = require('mongoose'),
    path = require('path'),
    // config = require(path.resolve('./config/config.json')),
    Schema = mongoose.Schema;
// Define collection and schema for User  
let UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    hash: {
        type: String
    },
    token: {
        type: String
    }
}, {
        collection: 'users'
    });
module.exports = mongoose.model('users', UserSchema); 
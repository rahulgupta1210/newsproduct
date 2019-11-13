var mongoose = require('mongoose'),
    path = require('path'),
    // config = require(path.resolve('./config/config.json')),
    Schema = mongoose.Schema;
// Define collection and schema for Product  
let ProductSchema = new Schema({
    NewsTitle: {
        type: String
    },
    NewsSource: {
        type: String
    },
    NewsLocation: {
        type: String
    },
    NewsDescription: {
        type: String
    }
}, {
        collection: 'News'
    });
module.exports = mongoose.model('Product', ProductSchema); 
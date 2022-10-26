const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    url: {
        type: String,
        default: ' ',
        max: 1024,
        require: true
    },
    caption: {
        type: String,
        min: 6,
        max: 2048,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('Posts', postsSchema);
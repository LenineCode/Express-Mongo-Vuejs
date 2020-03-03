const mongoose = require('mongoose');

const example = new mongoose.Schema({
    name: String,
    descripption: String,
}, { versionKey: false });

module.exports = mongoose.model('example', example);
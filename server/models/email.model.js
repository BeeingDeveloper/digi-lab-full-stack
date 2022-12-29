const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailModel = Schema({
    email: {type: String, required: true, unique: true},
},
{timestamps: true}
);

module.exports = mongoose.model('email', emailModel);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    user_id: {type: String, required: true, unique: true},
    imageURL: {type: String, required: true },
},{
    timestamps: true
}
);

module.exports = mongoose.model('user', userSchema );
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uiData = Schema({
    heading: {type: String},
    imageURL: {type: String},
},{
    timestamps: true
}
);

module.exports = mongoose.model('uidata', uiData );
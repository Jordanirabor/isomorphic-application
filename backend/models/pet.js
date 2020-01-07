const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: { type: String },
    type: { type: String },
    image: { type: Buffer },
    imageUrl: { type: String },
    description: { type: String }
})

module.exports = mongoose.model('Pet', petSchema);
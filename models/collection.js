const mongoose = require('mongoose');
const collection = new mongoose.Schema({
    itemid: String,
    category: String,
    name: String,
    description: String,
    purchaseDate: Date,
    model: String,
    location: String,
    warrantyExpiry: Date,
    purchasePrice: String
});
module.exports = mongoose.model('Collection', collection);
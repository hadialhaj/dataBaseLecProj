const mongoose = require('mongoose');

const Medications = new mongoose.Schema({
    medicationId: String,
    name: String,
    type: String,
    strength: String,
    description: String,
    category: String,
    sideeffect: [String],
    isactive: Boolean,
    price: Number,
    unitprice: String,
});
module.exports = mongoose.model('Medication', Medications);

const mongoose = require('mongoose');
const Billing = new mongoose.Schema({
    patientid: String,
    billid: String,
    appointmentid: String,
    billdate: { type: Date, default: Date.now },
    price: Number,
    category: String,
    description: String,
    tax: Number,
    totalamount: Number,
    paymentmethod: String
});
module.exports = mongoose.model('Bill', Billing);

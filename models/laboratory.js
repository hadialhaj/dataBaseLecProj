const mongoose = require('mongoose');

const Laboratory = new mongoose.Schema({
    patientid: String,
    doctorid: String,
    testtype: String,
    testcode: String,
    testname: String,
    orderdate: { type: Date, default: Date.now },
    collectdate: { type: Date, default: Date.now },
    statusresults: String,
    notes: String,
});
module.exports = mongoose.model('LabTest', Laboratory);

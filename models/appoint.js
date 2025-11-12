const mongoose = require('mongoose');
const appointment=new mongoose.Schema({
    appointmentId:String ,
    patientId:String ,
doctorId:String ,
    appointmentDate:Date ,
    reasonForVisit:String ,
    status:String ,
    date:{ type: Date, default: Date.now },
    room:String
});
module.exports = mongoose.model('Appointment', appointment);

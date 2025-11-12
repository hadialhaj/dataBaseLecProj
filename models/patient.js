const mongoose = require('mongoose');

const patient=new mongoose.Schema({
    patientId:String ,
    FirstName:String ,
    LastName:String ,
    Age:Number ,
    Gender:String ,
    Address:String ,
    PhoneNumber:String ,
    Email:String ,
    MedicalHistory:[String],
    date:{ type: Date, default: Date.now }
    
});
module.exports = mongoose.model('Patient', patient);

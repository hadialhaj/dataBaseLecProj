const mongoose = require('mongoose');

const medicalRecord=new mongoose.Schema({
    recordId:String ,
    patientId:String ,
    doctorId:String ,
    diagnosis:String ,
    treatment:String ,
    prescriptions:[String],
   visitdate:{ type: Date, default: Date.now }
   ,medications:[String]
});
module.exports= mongoose.model('MedicalRecord', medicalRecord);

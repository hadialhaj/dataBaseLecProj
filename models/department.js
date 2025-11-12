const mongoose = require('mongoose');
const department=new mongoose.Schema({
    departmentId:String ,
    name:String ,
    location:String ,
    headOfDepartment:String ,
    contactNumber:String ,
    date:{ type: Date, default: Date.now },
    doctorID:String,
    PhoneNumber:String,
    isActive:Boolean
});
module.exports = mongoose.model('Department', department);

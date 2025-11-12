const mongoose = require('mongoose');

const staff = new mongoose.Schema({
    staffId: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    department: String,
    employeeType: String,
    Phone: String,
    email: String,
    hiredate: Date,
    salary: String
});
module.exports = mongoose.model('Staff', staff);

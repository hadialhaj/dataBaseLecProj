const mongoose = require('mongoose');

const doctor=new mongoose.Schema({
   doctorId:       { type: String, required: true },
  firstName:      { type: String, required: true },
  lastName:       { type: String, required: true },
  age:            Number,
  gender:         { type: String, enum: ['male','female'] },
  address:        String,
  phoneNumber:    String,
  email:          String,
  specialization: String,
  dateOFJoining:  { type: Date, default: Date.now }
}, { timestamps: true }
);
module.exports = mongoose.model('Doctor', doctor);

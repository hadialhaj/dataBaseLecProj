const express = require('express');
const router=express.Router();
const  MedicalRecord=require('../models/medicalrecord');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newmedicalrecord=new MedicalRecord(req.body);
await newmedicalrecord.save();
res.status(201).json(newmedicalrecord);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const mrt=await MedicalRecord.find();
res.json(mrt);
});

router.get('/:id',async(req,res)=>{
const mrt=await MedicalRecord.findById(req.params.id);
res.json(mrt);
});

router.put('/:id',async(req,res)=>{
const umrt=await MedicalRecord.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(umrt);
});

router.delete('/:id',async(req,res)=>{
await MedicalRecord.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
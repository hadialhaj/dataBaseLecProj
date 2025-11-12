const express = require('express');
const router=express.Router();
const Patient=require('../models/patient');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newpatient=new Patient(req.body);
await newpatient.save();
res.status(201).json(newpatient);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const pt=await Patient.find();
res.json(pt);
});

router.get('/:id',async(req,res)=>{
const pt=await Patient.findById(req.params.id);
res.json(pt);
});

router.put('/:id',async(req,res)=>{
const upt=await Patient.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(upt);
});

router.delete('/:id',async(req,res)=>{
await Patient.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
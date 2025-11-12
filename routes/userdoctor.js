const express = require('express');
const router=express.Router();
const Doctor=require('../models/doctor');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newDoctor=new Doctor(req.body);
await newDoctor.save();
res.status(201).json(newDoctor);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const dt=await Doctor.find();
res.json(dt);
});

router.get('/:id',async(req,res)=>{
const dt=await Doctor.findById(req.params.id);
res.json(dt);
});

router.put('/:id',async(req,res)=>{
const udt=await Doctor.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(udt);
});

router.delete('/:id',async(req,res)=>{
await Doctor.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
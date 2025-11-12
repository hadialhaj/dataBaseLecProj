const express = require('express');
const router=express.Router();
const Staff=require('../models/staff');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newstaff=new Staff(req.body);
await newstaff.save();
res.status(201).json(newstaff);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const st=await Staff.find();
res.json(st);
});

router.get('/:id',async(req,res)=>{
const st=await Staff.findById(req.params.id);
res.json(st);
});

router.put('/:id',async(req,res)=>{
const ust=await Staff.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(ust);
});

router.delete('/:id',async(req,res)=>{
await Staff.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;

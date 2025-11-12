const express = require('express');
const router=express.Router();
const  Medication=require('../models/medication');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newmedication=new Medication(req.body);
await newmedication.save();
res.status(201).json(newmedication);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const mt=await Medication.find();
res.json(mt);
});

router.get('/:id',async(req,res)=>{
const mt=await Medication.findById(req.params.id);
res.json(mt);
});

router.put('/:id',async(req,res)=>{
const umt=await Medication.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(umt);
});

router.delete('/:id',async(req,res)=>{
await Medication.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
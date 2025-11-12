const express = require('express');
const router=express.Router();
const  Laboratory=require('../models/laboratory');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newlabor=new Laboratory(req.body);
await newlabor.save();
res.status(201).json(newlabor);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const mlt=await Laboratory.find();
res.json(mlt);
});

router.get('/:id',async(req,res)=>{
const mlt=await Laboratory.findById(req.params.id);
res.json(mlt);
});

router.put('/:id',async(req,res)=>{
const ult=await Laboratory.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(ult);
});

router.delete('/:id',async(req,res)=>{
await Laboratory.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
const express = require('express');
const router=express.Router();
const  Department=require('../models/department');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newdep=new Department(req.body);
await newdep.save();
res.status(201).json(newdep);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const udpt=await Department.find();
res.json(udpt);
});

router.get('/:id',async(req,res)=>{
const udpt=await Department.findById(req.params.id);
res.json(udpt);
});

router.put('/:id',async(req,res)=>{
const udpt=await Department.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(udpt);
});

router.delete('/:id',async(req,res)=>{
await Department.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
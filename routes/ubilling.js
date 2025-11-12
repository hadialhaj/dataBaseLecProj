const express = require('express');
const router=express.Router();
const  Billing=require('../models/billing');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newbill=new Billing(req.body);
await newbill.save();
res.status(201).json(newbill);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const ub=await Billing.find();
res.json(ub);
});

router.get('/:id',async(req,res)=>{
const ub=await Billing.findById(req.params.id);
res.json(ub);
});

router.put('/:id',async(req,res)=>{
const ub=await Billing.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(ub);
});

router.delete('/:id',async(req,res)=>{
await Billing.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
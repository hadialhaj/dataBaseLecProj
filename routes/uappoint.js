const express = require('express');
const router=express.Router();
const  Appoinment=require('../models/appoint');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newapp=new Appoinment(req.body);
await newapp.save();
res.status(201).json(newapp);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const uap=await Appoinment.find();
res.json(uap);
});

router.get('/:id',async(req,res)=>{
const uap=await Appoinment.findById(req.params.id);
res.json(uap);
});

router.put('/:id',async(req,res)=>{
const uap=await Appoinment.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(uap);
});

router.delete('/:id',async(req,res)=>{
await Appoinment.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
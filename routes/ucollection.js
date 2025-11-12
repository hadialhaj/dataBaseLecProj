const express = require('express');
const router=express.Router();
const  Collection=require('../models/collection');
const { message } = require('statuses');
router.post('/',async(req,res)=>{
try{
const newcoll=new Collection(req.body);
await newcoll.save();
res.status(201).json(newcoll);
}catch(error){
    res.status(400).json({message:error.message});
}
});
router.get('/',async(req,res)=>{
const uc=await Collection.find();
res.json(uc);
});

router.get('/:id',async(req,res)=>{
const uc=await Collection.findById(req.params.id);
res.json(uc);
});

router.put('/:id',async(req,res)=>{
const uc=await Collection.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json(uc);
});

router.delete('/:id',async(req,res)=>{
await Collection.findByIdAndDelete(req.params.id);
res.json({meassage:'staff deleted'});
});
module.exports = router;
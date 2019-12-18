const express = require ('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')
const jwt = require ('jsonwebtoken')
const uuid = require('uuid/v1');



//post 
router.post('/drugs', (req, res)=>{

    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    let drug = {
        id: uuid(),
        name: req.body.name,
        dose: req.body.dose,
        duration: req.body.duration,
        date: req.body.date
    }
    if(drug.name && drug.dose && drug.duration && drug.date){
        User.findByIdAndUpdate(userId, { $push : {drugs:drug}})
        .then(data => res.json(data))
        .catch(err=>res.send(err))
    }else{
        res.json({msg:'error connot find all durgs info'})
    }
    
})

router.post('/records', (req, res)=>{
    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    let record = {
        id: uuid(),
        type: req.body.type,
        text: req.body.text,
        date: req.body.date,
        
    }
    if(record.date && record.text && record.type ){
        User.findByIdAndUpdate(userId, { $push : {drugs:drug}})
        .then(data => res.json(data))
        .catch(err=>res.send(err))
    }else{
        res.json({msg:'error connot find all the record info'})
    }
    
})

router.post('/rays', (req, res)=>{
    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    let ray = {
        id: uuid(),
        title: req.body.title,
        fileUrl: req.body.fileUrl,
        date: req.body.date,
        
    }
    if(ray.fileUrl ){
        User.findByIdAndUpdate(userId, { $push : {rays:ray}})
        .then(data => res.json(data))
        .catch(err=>res.send(err))
    }else{
        res.json({msg:'error connot find all the rays info'})
    }
    
})

router.post('/tests', (req, res)=>{
    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    let test = {
        id: uuid(),
        title: req.body.title,
        scanUrl: req.body.scanUrl,
        date: req.body.date
        
    }
    if(test.scanUrl && test.date && test.title ){
        User.findByIdAndUpdate(userId, { $push : {drugs:drug}})
        .then(data => res.json(data))
        .catch(err=>res.send(err))
    }else{
        res.json({msg:'error connot find all the tests info'})
    }
    
})


// delete
router.delete('/drug', (req,res)=>{
    // you will have to pass either the id or the token and thgin the token for it to work
    // and boom it deletes the drug 
    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    User.findById(userId)
    .then(data =>{
       arr = data.drugs
        arr = arr.filter(elem=> elem.id != req.body.drugId)
        User.findByIdAndUpdate(userId,{drugs:arr})
        .then(data=>res.send(data))
        .catch(err=>res.send(err))
    })
    .catch(err=> res.send(err))
})
// update
router.put('/drug',(req,res)=>{
    var userId = null
    
    if(req.body.id){
        
        userId = req.body.id
    }
     else if(req.body.token){
        var decoded = jwt.verify(req.body.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }
    User.findById(userId)
    .then(data=>{
        if(req.body.drugId){
            if(req.body.name && req.body.dose && req.body.duration && req.body.date){
               let drugs = data.drugs 
      for (drug of drugs){
       
            if(drug.id == req.body.drugId){
                drug.name = req.body.name
                drug.dose = req.body.dose
                drug.duration = req.body.duration
                drug.date = req.body.date
            }
       
      } 
      User.findByIdAndUpdate(userId, {drugs:drugs})
      .then(data=> res.json(data))
      .catch(err=>res.send(err)) }else{
        res.json({msg:'please make sure to incloud date, dose, duration, and name '})
    }
    } else{
        res.json({msg:'please inclode the Id of the drug :)) drugId: "something"'})
    }
   
    })
    .catch(err=>res.send(err))



})

//get 
router.get('/', (req,res)=>{
    var userId = null
    console.log('here');
    
    if(req.headers.id){
        console.log('entered');
        
        userId = req.headers.id
    }
     else if(req.headers.token){
        var decoded = jwt.verify(req.headers.token, 'secret');
        userId = decoded.user._id
    }else{
        res.json({"msg":"error connot find a token or userId :P"})
    }

    User.findById(userId)

    .then(data=>{
        res.json({
            drugs:data.drugs,
            rays:data.rays,
            tests:data.tests,
            medical_records:data.medical_records
        })
    })
    .catch(err => res.json({msg:err}))




})

module.exports = router

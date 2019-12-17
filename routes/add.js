const express = require ('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')
const jwt = require ('jsonwebtoken')
/*
take the token and add the thing to it 
get for patients and doctors // based on if there was a token or not
post for patients
post for doctors by id
*/

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
        res.json({msg:'error connot find all the drugs info'})
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
        title: req.body.title,
        fileUrl: req.body.fileUrl,
        date: req.body.date
        
    }
    if(ray.fileUrl && ray.date && ray.title ){
        User.findByIdAndUpdate(userId, { $push : {drugs:drug}})
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

const express = require('express')
const router = express.Router()
const Hospitals = require("../model/Hospitals")
const Drug = require("../model/Drug")
const jwt = require('jsonwebtoken')


// router.post('/create', (req,res)=>{
//     Hospitals.create(req.body)
//     .then(thing => res.json({msg:req.body}))
//     .catch(err=> res.json(err))
// })

router.post('/Hospitals', (req, res)=>{
    let hospital = {
        name: req.body.name,
        location:req.body.location,
        rating:req.body.rating,
       
    }
    Hospitals.create(hospital)
    .then(something => res.send(something))
    .catch(err => res.send(err))
    


})
// add doctors 

/*
name 
major 
sction : family

*/

/*
doctors.filter(doc=> doc.section == selcted )
*/

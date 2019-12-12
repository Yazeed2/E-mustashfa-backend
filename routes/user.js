const express = require ('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/User')
const bcrypt = require('bcrypt')
// creating a new user 
router.post('/register', (req,res)=>{  
    
    newUser = {
        first_name : req.body.firstname,
        last_name : req.body.lastname,
        email: req.body.email,
        password : req.body.password,
        dob : req.body.dob,
        weight : req.body.weight,
        height : req.body.height,
        nationality : req.body.nationality,
        phoneNumber : req.body.phoneNumber,
        emergencyName : req.body.emergencyName,
        emergencyPhone : req.body.emergencyPhone
    }


    User.findOne({email : req.body.email})
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash)=>{ 
                newUser.password = hash
                User.create(newUser)
                .then(user => res.send("user created " + newUser.email))
                .catch(err=> res.send(err))
            })
        }else{
            res.send('email is used')
        }
    }).catch(err => res.send(err))
})


module.exports = router

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const drugsSchema = new Schema({
name : {
    required:true,
    type:String
},
dose : {
    required:true,
    type:String
},
duration: {
    required:true,
    type:String
},
date : {
    required:true,
    type:Date
},

},{timestamps:true})
 
const Drugs = mongoose.model('Drugs',drugsSchema)
module.exports=Drugs
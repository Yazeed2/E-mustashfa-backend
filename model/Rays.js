const mongoose = require('mongoose')
const Schema = mongoose.Schema
const raysSchema = new Schema({
file:{
    required:true,
    type:String
},
dob : {
    required:true,
    type:Date
},
},{timestamps:true})
 
const Rays = mongoose.model('user',raysSchema)
module.exports=Rays
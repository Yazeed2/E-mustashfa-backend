const mongoose = require('mongoose')
const Schema = mongoose.Schema
const medicalSchema = new Schema({
date : {
    required:true,
    type:Date
},
text:{
    type:String,
    required:true
},
type : {
    type:String,
    required: true
},
},{timestamps:true})
 
const Medical = mongoose.model('Medical_Records',medicalSchema)
module.exports=Medical
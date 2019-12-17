const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TestSchema = new Schema({

picture:{
    required:true,
    type:String
},
dob : {
    required:true,
    type:Date
},
},{timestamps:true})
 
const Test = mongoose.model('Tests',testSchema)
module.exports=Test


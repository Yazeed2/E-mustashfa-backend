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
dob : {
    required:true,
    type:Date
},

},{timestamps:true})
 
const Drugs = mongoose.model('user',drugsSchema)
module.exports=Drugs
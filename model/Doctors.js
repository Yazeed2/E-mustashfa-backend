const mongoose = require('mongoose')
const Schema = mongoose.Schema
const doctorsShema = new Schema({
first_name : {
    required:true,
    type:String
},
last_name : {
    required:true,
    type:String
},
password : {
    required:true,
    type:String
},
nationality : {
    required:true,
    type:String
},
phoneNumber : {
    required:true,
    type:String
},
emergencyName : {
    required:true,
    type:String
},
specialty: {
    required:true,
    type:String
},
yearOfExp : {
    required:true,
    type:String
},
gender : {
    required:true,
    type:String
},
workingTime : {
    required:true,
    type:String
},
rating : {
    required:true,
    type:String
},
emergencyPhone : {
    required:false,
    type:String
},
},{timestamps:true})
 
const Doctors = mongoose.model('Doctors',doctorsShema)
module.exports=Doctors
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const appointmentsShema = new Schema({
time :{
    required:true,
    type:Date
},
doctors: {
    required:true,
    type:String
},
patiants : {
required:true,
type:String
},
},{timestamps:true})
 
const Appointments = mongoose.model('appointments',appointmentsShema)
module.exports=Appointments
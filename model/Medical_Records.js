const mongoose = require('mongoose')
const Schema = mongoose.Schema
const medicalSchema = new Schema({
dob : {
    required:true,
    type:Date
},
previousSurgries : {
    type:String
},

longDiseases : {
    type:String
},
medicalState : {
    type:String
},
},{timestamps:true})
 
const Medical = mongoose.model('user',medicalSchema)
module.exports=Medical
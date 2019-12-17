const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userShema = new Schema({
first_name : {
    required:false,
    type:String
},
last_name : {
    required:false,
    type:String
},
email: {
    required:false,
    type:String
},
password : {
    required:false,
    type:String
},
dob : {
    required:false,
    type:Date
},
weight : {
    required:false,
    type:Number
},
height : {
    required:false,
    type:Number
},
nationality : {
    required:false,
    type:String
},
phoneNumber : {
    required:false,
    type:String
},
emergencyName : {
    required:false,
    type:String
},


gender : {
    required:false,
    type:String
},
emergencyPhone : {
    required:false,
    type:String
},
drugs:[
   
  ],
  rays:[
  
  ],
  tests:[
 
  ],  
  medical_records:[
    
  ],
}
,{timestamps:true})
 
const User = mongoose.model('user',userShema)
module.exports=User
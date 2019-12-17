const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hospitalSchema = new Schema({
name: {
    required:true,
    type:String
},
location: {
    required:true,
    type:String
},
rating: {
    required:true,
    type:String
},
sections:[],
doctors:[]

},{timestamps:true})
 
const Hospital = mongoose.model('Hospital',hospitalSchema)
module.exports = Hospital
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
PORT = 3100 || process.env.PORT

mongoose.connect('mongodb://localhost/eMustashfa',{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log('mongoDB is connected'))
.catch(err=>console.log(err))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/user',require('./routes/user'))
app.listen(PORT,()=>console.log('server is running in '+ PORT))
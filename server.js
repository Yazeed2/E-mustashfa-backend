const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
PORT = 4000 || process.env.PORT

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log('mongoDB is connected'))
.catch(err=>console.log(err))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/file',require('./routes/add'))
app.use('/user',require('./routes/user'))

app.listen(PORT,()=>console.log('server is running in '+ PORT))
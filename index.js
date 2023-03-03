const express= require('express')
const app= express()
const path= require('path')
const bodyParser= require("body-parser")
const mongoose= require('mongoose')
const Port=8080
const Todo= require('./models/todo')

mongoose.connect('mongodb+srv://abrshewube:Abrhamwube27@cluster0.j3w5hwf.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
    
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));


app.use(bodyParser.json())

app.post('/api/create',async(req,res)=>{
    const record=req.body
    
    const response=await Todo.create(record)
    console.log(response)
    res.json({status:'ok'})

})

app.listen(Port,()=>{
    console.log(`server is running on port:${Port} `)
})
const express=require('express')
const cors=require('cors')
const path=require('path')// inbuilt in node js
const dotenv=require('dotenv')

dotenv.config() // for supporting dotenv

//will connect db later
const app=express()
//CORS config
app.use(cors({
    origin:['*'],
    methods:['GET','POST','DELETE','PATCH',"PUT"],
    credentials:true // for login
}))

app.use(express.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads'))) // now this folder is hosted :iss folder k andr ke sare image hosted h


//Routes

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is listening to ${PORT}`))

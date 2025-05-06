//userController

const User=require('../models/userModel');
const { createToken } = require('../utils/jwtToken');


const registerUser=async(req,res)=>{
    try{
     const {name,email,password,phone}=req.body;
     //check user inputs
     const userExists=await User.findOne({email});
     if(userExists){
        return res.status(400).json({
            success:false,
            message:'User already exists'
        })
     }

     const user =await User.create({
        name,
        email,
        password,
        phone,
        role:'user'
     })

     res.status(201).json({
            success:true,
            token:createToken
     })
    }
    catch(error){

    }
}
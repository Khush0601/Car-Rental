//db config:
const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log("mongoDb connected")
    }
    catch(err){
        console.log(err.message)

    }
}

module.exports=connectDB
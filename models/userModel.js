//user model
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please proide a name"] //when u want to give multiple values then just provide it in a array 
    },
    email:{
        type:String,
        required:[true,"please proide a email"],
        unique:true,

    },
    password:{
        type:String,
        required:[true,"please proide a password"],
        minLength:6
    },
    phone:{
        type:Number,
        required:[true,"please proide a number"]
    },
    status:{
        type:String,
        enum:['ACTIVE','Banned']// values ky ho sakte h 
    },
    
},{
    timestamps:true
})

userSchema.pre('save',async function (next) {
   const salt=await bcrypt.genSalt(10)
   this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchPassword=async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

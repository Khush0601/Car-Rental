//jwt token
const jwt=require('jsonwebtoken')

exports.createToken=(user)=>{
    //while creating token three things are going:
    return jwt.sign(
    {
        id:user._id // 1st detail
    },
    process.env.JWT_SECRET,//2nd 
    {expiresIn:'2m'} //3rd
)
}

import jwt from 'jsonwebtoken';

const generateToken=async(userid)=>{
   try {
    let token=await jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:"7d"}) 
    return token
   } catch (error) {
    console.log("token error")
   }
}

export default generateToken
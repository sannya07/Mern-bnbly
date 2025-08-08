import User from "../models/User.model.js";
import bcrypt from 'bcrypt';
import generateToken from "../config/token.js";


export const signUp=async(req,res)=>{
    try {
        let {name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists!"
            })
        }

        if(!name || !email || !password){
            return res.status(400).json({
                message:"Please fill all the fields"
            })
        }
        let hashedPssword= await bcrypt.hash(password,10);
        let user= await User.create({
            name,
            email,
            password:hashedPssword
        })

        let token=await generateToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT="production",
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Sign up error"})
        
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User is not exist"})
        }
        let isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"incorrect password!"
            })
        }

        let token=await generateToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT="production",
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Sign in error"})
        
    }
}
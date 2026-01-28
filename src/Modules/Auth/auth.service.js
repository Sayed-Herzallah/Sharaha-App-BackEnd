// ================== import modules ============================
import {userModel } from "../../DataBase/Models/user.model.js";
import { compare,hash } from "../../utils/hashing/hash.js";
import { emailEmmiter } from "../../utils/Emails/email.event.js";
import {  encrypt } from "../../utils/encryption/encryption.js";
import { verifyToken , gererateToken } from "../../utils/token/token.js";
// ================== register ============================
export const register=async(req,res,next)=>{

        const  {userName ,phone, email , password,confirmPassword}=req.body;
    const createUser = await userModel.create({
  ...req.body,
  password: hash({ plainText: password }),
  phone: encrypt({ ciperText: phone })
});
console.log("createUSer",createUser);

        if (!createUser){
            return next(new Error("failed to register",{case:400}))
        }
        emailEmmiter.emit("sendEmail",email)
        return res.status(201).json({success:true,message:"success to register"})
      }


// ================== login ============================
export const login=async(req,res,next)=>{
        const  {email , password}=req.body;
        const user=await userModel.findOne({email:email})
        if(!user){
        return res.status(404).json({message:"Not found Email"})
        }
        if(user.active===false){
            return next(new Error("user not active",{case:400}))
        }
        if(user.isDeleted==true){
            await user.save()
        }
         res.status(200).json({success:true,message:"success to login",token:gererateToken({id:user._id,email:user.email,role:user.role},process.env.JWT_SECRET, {expires:process.env.expiresIn})})

}
// ================== verify ============================
export const verify = async(req,res,next)=>{
        const {token}=req.params
        const {email}=verifyToken(token)
       const user= await userModel.findOneAndUpdate({email},{active:true},{
        new:true
       })
       if(!user===active.false){
        return next(new Error("user not found",{case:404}))
       }
       
        return res.status(200).json({success:true,message:"success to verify"})
}






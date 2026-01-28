// ================== import modules ============================
import { userModel } from "../../DataBase/Models/user.model.js"
import { encrypt } from "../../utils/encryption/encryption.js"
import { compare, hash } from "../../utils/hashing/hash.js"

export const profile= async (req,res,next)=>{
      const {user}=req 
       return res.status(200).json({...user})
}

// update profile
export const updateProfile=async (req,res,next)=>{
  const {user}=req
  if(req.body.phone){
    req.body.phone=encrypt({ciperText:req.body.phone})
  }
  const userUpdate=await userModel.findByIdAndUpdate(user._id,{...req.body},{new:true,runValidators:true}).lean()


  return res.status(200).json({success:true,message:"success to update profile",result:{...userUpdate}})
}


// update password
export const updatePassword=async (req,res,next)=>{
  const {oldPassword,password,confirmPassword}=req.body
  // check password
  const checkPassword= compare({plainText:oldPassword,hashPassword:req.user.password})
  if(!checkPassword){
  return next(new Error("old passowrd not match",{case:400}))
  }
  // find user and update password and hashing
  const user=await userModel.findByIdAndUpdate(req.user._id,{password:hash({plainText:password}),changeAtPassword:Date.now()},
  {new:true,runValidators:true})
  return res.status(200).json({success:true,message:"success to update password",result:user})
}

// softDeleted
export const softDeleted=async (req,res,next)=>{
  const user=await userModel.findByIdAndDelete(req.user._id,{isDeleted:true,changedAt:Date.now()},{new:true,runValidators:true})
  return res.status(200).json({success:true,result:user})
}
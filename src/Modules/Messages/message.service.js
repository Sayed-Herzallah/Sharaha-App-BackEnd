// ====================== import modules ==============================
import { messageModel } from "../../DataBase/Models/message.model.js";
import { userModel } from "../../DataBase/Models/user.model.js";
import { falgs } from "./message.validation.js";
// ====================== get all messages ==============================
export const getAllMessages = async (req, res, next) => {
    // const {user}=req
    const {flag} = req.query
    if(flag==falgs.sender){
        const messaages=await messageModel.find({sender:req.user._id})
        return res.status(200).json({success:true,result:messaages})
    }else if (flag==falgs.receiver) {
        const messaages=await messageModel.find({receiver:req.user._id})
        return res.status(200).json({success:true,result:messaages})
    }
}
// ====================== get single message ==============================
export const getSingleMessages = async (req, res, next) => {
    const {id}=req.params
    const {user}=req
    const message=await messageModel.findById(id).populate([{path:"sender",select:"-__v -password -active -role -_id -createdAt -updatedAt"},
        {path:"receiver",select:"-__v -password -active -role -_id -createAt -updatedAt"}])
    if(!message){
        return next(new Error("message not found",{case:404}))
    }
    if(message.sender.email!==user.email && message.receiver.email!==user.email){
        return next(new Error("not allowed message",{case:403}))
    }
    return res.status(200).json({success:true,result:message})
}
// ====================== create message ==============================
export const createMessage = async (req, res, next) => {
    const {content,receiver}=req.body
    // check receiver exist
    const user=await userModel.findById(receiver)
    if(!user){
        return next(new Error("user not found",{case:404}))
    }
    await messageModel.create({
        content,
        sender:req.user._id,
        receiver
    }
    )
    return res.status(201).json({success:true,result:"success to create message"})
}
// ======================= update message ==============================
export const updateMessage = async (req, res, next) => {
    const {id}=req.params
    const {content}=req.body
    const message= await messageModel.findByIdAndUpdate(id,{content})
    if(req.user._id.toString() !==message.sender.toString()){
        return next(new Error(("you can't update your message",{case:403})))
    }
    return res.status(200).json({success:true,message:message})
}
// ============== delete message =================================
export const deleteMessage = async (req, res, next) => {
    const {id} =req.params
    const message=await messageModel.findByIdAndDelete(id)
    if(message.sender.toString()!==req.user._id.toString()){
  return next(new Error(("you can't delete your message"),{case:403}))
    }
    return res.status(200).json({success:true,message:message})
}
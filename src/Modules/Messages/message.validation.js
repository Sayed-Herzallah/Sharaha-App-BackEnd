import Joi from "joi";
import { Types } from "mongoose";

//  =============  flag for get all messages ================
export const falgs={
  sender:"sender",
  receiver:"receiver"
}
// ================== get all messages =================
export const getAllMessages = Joi.object({
  flag:Joi.string().valid(...Object.values(falgs)).required()
}).required()

// ================= create message =================
export const createMessage = Joi.object({
    content:Joi.string().required(),
    receiver:Joi.custom((value,helpers)=>{
      if (Types.ObjectId.isValid(value)) {
        return true
      } else {
        return helpers.message("receiver is required")
      }
    }).required()
}).required()

// ================= update message =================
export const updateMessage = Joi.object({
  id:Joi.custom((value,helpers)=>{
    if(Types.ObjectId.isValid(value)){
      return true
    }else{
      return helpers.message("id is required")
    }
  }).required(),
  content:Joi.string().required(
  )
}).required()
// ================= delete message =================
export const deleteMessage = Joi.object({
  id:Joi.custom((value,helpers)=>{
    if(Types.ObjectId.isValid(value)){
      return true
    }else{
      return helpers.message("id is required")
    }
  }).required()
}).required()
// ================= get single message =================
export const getSingleMessages = Joi.object({
  id:Joi.custom((value,helpers)=>{
    if(Types.ObjectId.isValid(value)){
      return true
    }else{
      return helpers.message("id is required")
    }
  }).required()
}).required()



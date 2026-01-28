// ================= import modules =================
import mongoose from "mongoose";
// ================= message schema =================
export const messageSchema=mongoose.Schema({
 content:{
    type:String,
    required:true,
 },
 sender:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:true
 },
    receiver:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:true
 }
},{
    timestamps:true,
})
// ================= export message model =================
export const messageModel=mongoose.model("message",messageSchema)



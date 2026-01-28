// ================= import modules =================
import mongoose from "mongoose";
// ================= user schema =================
export const roles={
  user:"user",
  admin:"admin"
}
// ================= user schema =================
export const userSchema = new mongoose.Schema({
  userName:{
    type:String,
    required:true,
    minlength:[3,"user name min length is 3 chars"],
    maxlength:[30,"user name max length is 30 chars"]
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match:[
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "invalid email format"
    ]
  },
  password:{
    type:String,
    required:true,
    minlength:[8,"password min length is 8 chars"]
  },
phone: {
  type: String,
  required: true,
  trim:true,
//   match: [
//     /^\d{11}$/,
//     "phone number must be 11 digits and start with 01"
//   ]
},
  age:Number,
  gender:{
    type:String,
    enum:{
      values:["male","female"],
      message:"gender must be male or female"
    }
  },
  changedAt:Date,
  changeAtPassword:Date,
  isDeleted:{
    type:Boolean,
    default:false
  },
  active:{
    type:Boolean,
    default:false
  },role:{
  type:String,
  enum:["user","admin"],
  default:"user"
}
},{
  timestamps:true,
});
// ================= export user model =================
export const userModel = mongoose.model("User", userSchema);

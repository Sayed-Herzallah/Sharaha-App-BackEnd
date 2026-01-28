// ================== import modules ============================
import  jwt  from 'jsonwebtoken';
import { EventEmitter } from "events";
import { signUp } from "./generate.Html.js";
import sendEmails, { account } from "./sendEmail.js";
// ========== email event ===========
export const emailEmmiter=  new EventEmitter()
emailEmmiter.on("sendEmail",async(email)=>{
 const tokenEmail=jwt.sign({email},process.env.secret_token,{expiresIn:"24h"})
 
const link=`http://localhost:3000/auth/verify/${tokenEmail}`
await sendEmails({to:email,subject:account.register,html:signUp({link})})
})



// ================= import modules =================
import jwt from "jsonwebtoken"

// ================= gererate token =================
export const gererateToken =  (payload,signature=process.env.JWT_SECRET,options={})=>{
    return jwt.sign(payload,signature,options={})
}
// ================= verify token =================
export const verifyToken=(token,signature=process.env.JWT_SECRET,options={})=>{
    return jwt.verify(token,signature,options={})
}
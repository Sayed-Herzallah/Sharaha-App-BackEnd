// ================= import modules ============================
import bcrypt from "bcrypt"
// ================= hash password =============
export const hash=({plainText,salt=Number(process.env.ROUNDS)})=>{
    return bcrypt.hashSync(plainText,salt)
}
// ================= compare password =============
export const compare = ({plainText,hashPassword})=>{
 return bcrypt.compareSync(plainText,hashPassword)
}
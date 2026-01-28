// ================== import modules ============================
import CryptoJS from "crypto-js"
// ============= encrypt  =============
export const encrypt =({ciperText,secret = process.env.secret})=>{
 return CryptoJS.AES.encrypt(ciperText,secret).toString()
}
// =============  decrypt =============
export const decrypt =({ciperText,secret = process.env.secret})=>{
 return CryptoJS.AES.decrypt(ciperText,secret).toString(CryptoJS.enc.Utf8)
}    





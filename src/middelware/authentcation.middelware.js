// ================ import modules ============================
import { userModel } from "../DataBase/Models/user.model.js";
import { verifyToken } from "../utils/token/token.js";
// ================ isAuthentcation ============================
const isAuthentcation = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication failed: token not found" });
    }

    const token = authorization.split(" ")[1];
    const { id ,iat} = verifyToken(token); // function تتحقق من JWT
    if (!id) return res.status(401).json({ message: "Invalid token" });

    const user = await userModel.findById(id).lean()
    
    
    if (!user) return res.status(404).json({ message: "User not found" });
   if(user.changedPasswordAt?.getTime()>=iat*1000){
    return res.status(401).json({ message: "User recently changed password, please log in again" });
   }
   if (user.active===false) {
    return next(new Error("Please Active account",{case:401}))
   }
   if(user.isDeleted===true){
    return res.status(401).json({ message: "User deleted, please log in again" });
   }
    req.user = user; 
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export default isAuthentcation;






































